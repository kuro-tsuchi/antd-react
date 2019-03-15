/*
 * @Author: wqjiao
 * @Date: 2019-03-15 13:45:30
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:22:33
 * @Description: HelpCenter 帮助中心
 */
import React, {Component} from 'react';
import PublicHeader from '@/common/PublicHeader';
import {is, fromJS} from 'immutable';
import './index.less';

export default class HelpCenter extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (
            !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
        );
    }

    render() {
        console.log('render:', this);
        return (
            <main>
                <PublicHeader title="帮助中心" />
                <article className="context-con">
                    <h2>介绍</h2>
                    <p>
                        本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux
                        之间的配合方式
                    </p>
                    <h2>技术要点</h2>
                    <p>react -- ^16.8.4</p>
                    <p>redux -- ^4.0.1</p>
                    <p>react-redux -- ^6.0.1</p>
                    <p>react-router-dom -- ^4.3.1</p>
                    <p>redux-logger -- ^3.0.6</p>
                    <p>redux-thunk -- ^2.3.0</p>
                    <p>webpack -- 4.28.3</p>
                    <p>less -- ^3.9.0</p>
                    <p>antd -- ^3.15.0</p>
                    <p>moment -- ^2.24.0</p>
                    <p>axios -- ^0.18.0</p>

                    <p>eslint</p>
                    <p>prettier</p>

                    <p>ES 6/7/8</p>
                    <p>code split</p>
                    <p>hot loader</p>
                    <p>immutable -- ^4.0.0-rc.12</p>
                    <p>
                        项目地址 <a href="https://github.com/wqjiao">github</a>
                    </p>
                </article>
            </main>
        );
    }
}
