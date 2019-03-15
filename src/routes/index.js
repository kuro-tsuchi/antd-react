import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';
import clearSession from '../utils/sessionStorage';
// Route json file(route name、path and component)
import routeJson from './routeJson'; // 路由数据
import Home from '@/pages/Home';
import NoMatch from '@/pages/NoMatch';

const enterRoute = () => {
    // 清除路由产生的缓存
    clearSession();
};
// const HelpCenter = asyncComponent(() =>
//     import(/* webpackChunkName: "HelpCenter" */ '@/pages/HelpCenter')
// );

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，
// 子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/HelpCenter" component={HelpCenter} /> */}

                    {/* 页面路由集合 */}
                    {Object.keys(routeJson).map(item => {
                        return routeJson[item].map(key => {
                            return (
                                <Route
                                    key={key.routePath}
                                    path={key.routePath}
                                    component={key.component}
                                    onEnter={key.isOnEnter ? enterRoute.bind(this) : ''}
                                />
                            );
                        });
                    })}

                    <Route path="*" component={NoMatch} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}
