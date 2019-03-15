/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:08:28
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:08:50
 * @Description: PublicHeader 公共标题组件
 */
import React, {Component} from 'react';
import {is, fromJS} from 'immutable';
import './index.less';

export default class PublicHeader extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (
            !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
        );
    }

    render() {
        return <h2>{this.props.title}</h2>;
    }
}
