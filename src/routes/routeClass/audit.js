/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:24:14
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:24:53
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
        )
    }
];

export default audit;
