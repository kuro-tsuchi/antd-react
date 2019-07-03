/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:20:35
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-18 13:57:55
 * @Description: AuditReadyList 待审核列表
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '@/redux/audit/action';
import PublicHeader from '@/common/PublicHeader';
import {Form, Row, Col, Input, Button, Table, Divider, Tag} from 'antd';
import './index.less';

const propTypes = {
    result: PropTypes.string
};

const defaultProps = {
    result: 'Waiting 。。。'
};

class AuditReadyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * @return [Array] Form.Item
     * @description 模拟表单元素
     */
    getFields() {
        const {getFieldDecorator} = this.props.form;
        const children = [];
        for (let i = 0; i < 6; i++) {
            children.push(
                <Col span={8} key={i}>
                    <Form.Item label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!'
                                }
                            ]
                        })(<Input placeholder="placeholder" />)}
                    </Form.Item>
                </Col>
            );
        }
        return children;
    }

    /**
     * @method 搜索列表数据
     * @description 根据筛选项，搜索列表数据
     */
    handleSearch = e => {
        e.preventDefault();
        let me = this;
        me.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
            let result = '';

            Object.keys(values).forEach(key => {
                result += key + ':' + values[key] + ';';
            });
            me.props.actions.updateAuditInfo({result});
        });
    };

    /**
     * @method 清空表单数据
     */
    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        let {result} = this.props;
        // Table 表头
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                )
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;">Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Delete</a>
                    </span>
                )
            }
        ];
        // Table 数据
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer']
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser']
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher']
            }
        ];

        return (
            <div className="bms-audit-ready-list">
                <PublicHeader title="待审核列表页" />
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <div className="ready-list-result">{result}</div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.audit;
};
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

AuditReadyList.propTypes = propTypes;
AuditReadyList.defaultProps = defaultProps;

const AuditReadyListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(AuditReadyList));

export default AuditReadyListConnect;
// export default Form.create()(AuditReadyList);
