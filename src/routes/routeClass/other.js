/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:24:14
 * @Last Modified by: wqjiao
 * @Last Modified time: 2020-02-13 14:12:07
 * @Description: other 其他单独流程业务
 */
import asyncComponent from '@/utils/asyncComponent';

let other = [
    {
        // 待审核任务列表
        routePath: '/HelpCenter',
        isOnEnter: false,
        component: asyncComponent(() =>
            import(/* webpackChunkName: "HelpCenter" */ '@/pages/HelpCenter')
        ),
        url: '@/pages/HelpCenter',
        name: 'HelpCenter'
    }
];

export default other;
