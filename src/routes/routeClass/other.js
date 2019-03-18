/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:24:14
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-18 11:30:38
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
        )
    }
];

export default other;
