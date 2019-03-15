/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:22:45
 * @Last Modified by:   wqjiao
 * @Last Modified time: 2019-03-15 18:22:45
 * @Description: Home 首页
 */
import React from 'react';
import PublicHeader from '@/common/PublicHeader';
import './index.less';

class Home extends React.Component {
    render() {
        return (
            <div className="bms-home">
                <PublicHeader title="首页" />
                <div>这里是显示首页信息哒~~</div>
            </div>
        );
    }
}

export default Home;
