/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:19:27
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:20:18
 * @Description: Layout 页面布局
 */
import React, {Component} from 'react';
import Routes from '@/routes';
import LeftBar from './LeftBar';
import Header from './Header';
import './index.less';

class Layout extends Component {
    render() {
        return (
            <div className="bms-layout">
                {/* 左侧边栏 */}
                <LeftBar />
                {/* 右侧内容 */}
                <div className="bms-layout-right">
                    {/* 头部 */}
                    <Header />
                    {/* 主题业务 */}
                    <div className="bms-layout-intro">
                        <Routes />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
