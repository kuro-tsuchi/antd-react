/**
 * 路由数据集合
 * Route json file(route name、path and component)
 */
import audit from './routeClass/audit'; // 信息审核
import other from './routeClass/other'; // 其他单独流程业务

let routeJson = {
    audit,
    other
};

export default routeJson;
