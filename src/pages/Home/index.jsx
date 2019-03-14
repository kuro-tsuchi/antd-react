import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Input, Button, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '@/redux/home/action';

import './index.less';

const propTypes = {
    name: PropTypes.string
};

const defaultProps = {
    name: 'Home'
};

class Home extends React.Component {
    handleConfirm = () => {
        this.props.actions.updateHomeInfo({
            name: this.refs.nameInput.input.value
        });
    };

    handleReset = () => {
        this.props.actions.resetHomeInfo();
    };

    render() {
        let {name} = this.props;
        return (
            <div className="bms-home">
                <h1 className="bms-home-h1">
                    <Icon type="smile" theme="twoTone" />
                    Hello, {name}
                </h1>
                <Row>
                    <Col span={16}>
                        <Input ref="nameInput" placeholder="请输入名字" defaultValue={name} />
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.handleConfirm}>
                            确认
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.handleReset}>
                            重置
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.home;
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const HomeConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeConnect;
