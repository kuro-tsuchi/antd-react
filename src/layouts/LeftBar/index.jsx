/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:09:39
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-04-30 15:49:39
 * @Description: LeftBar 页面布局 -- 左侧边栏
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter, HashRouter} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['sub1'], // 默认打开的 Menu
            collapsed: false // 缩小左侧边栏
        };
        this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    }

    // 左侧边栏缩放切换
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    /**
     * @method SubMenu 展开/关闭的回调
     * @param [Array] 当前展开的 SubMenu 菜单项 key 数组
     */
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    // 方式二：this.context.router.history.push
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    handleClick = () => {
        // 方式一：withRouter && this.props.history.push
        this.props.history.push({
            pathname: '/audit-ready-list',
            query: '111111111***'
        });

        // 方式二：this.context.router.history.push
        this.context.router.history.push({
            pathname: '/audit-ready-list',
            query: '111111111***'
        });
    }

    render() {
        return (
            <div className="bms-layout-left" style={{width: 256}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Button onClick={this.handleClick}>Demo</Button>
                <Menu
                    openKeys={this.state.openKeys}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                    onOpenChange={this.onOpenChange}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>
                            <Link to="/">Home</Link>
                        </span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Link to="/audit-ready-list">AuditReadyList</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <Link to="/HelpCenter">HelpCenter</Link>
                        </Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="4">
                                <Link to="/NoMatch">NoMatch</Link>
                            </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftBar);
