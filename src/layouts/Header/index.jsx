/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:09:05
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:09:25
 * @Description: Header 页面布局 -- 整体头部
 */
import React, {Component} from 'react';
import './index.less';

class Header extends Component {
    render() {
        return (
            <header className="bms-layout-header">
                <h1 className="bms-layout-title">Welcome to React</h1>
            </header>
        );
    }
}

export default Header;
