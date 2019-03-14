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

                <div className="bms-layout-right">
                    <Header />

                    <div className="bms-layout-intro">
                        <Routes />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
