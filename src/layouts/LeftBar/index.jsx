import React from 'react';
// import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['sub1'],
            collapsed: false
        };
        this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    }

    // static contextTypes = {
    //     router: PropTypes.object.isRequired,
    // }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

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

    handleClick = () => {
        this.props.history.push('/HighComponent?cid=111');
        // this.context.router.history.push('/about');
    };

    render() {
        return (
            <div className="bms-layout-left" style={{width: 256}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Button onClick={this.handleClick}>随便跳转</Button>
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
                            <Link to="/NoMatch">NoMatch</Link>
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
                            <Link to="/NoMatch">NoMatch</Link>
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
// export default LeftBar;
