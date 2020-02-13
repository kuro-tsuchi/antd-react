/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:24:14
 * @Last Modified by: wqjiao
 * @Last Modified time: 2020-02-13 14:35:21
 * @Description: audit 审核业务流程
 */
import asyncComponent from '@/utils/asyncComponent';

let audit = [
    {
        // 待审核任务列表
        routePath: '/audit-ready-list',
        isOnEnter: false,
        component: asyncComponent(() =>
            import(/* webpackChunkName: "AuditReadyList" */ '@/pages/AuditReadyList')
        ),
        url: '@/pages/AuditReadyList',
        name: 'AuditReadyList'
    }
];

export default audit;
