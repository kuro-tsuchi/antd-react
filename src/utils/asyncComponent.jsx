/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:31:41
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:32:03
 * @Description: asyncComponent 实现组件按需加载 -- function
 */
import React, {Component} from 'react';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const {default: component} = await importComponent();

            this.setState({component});
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
