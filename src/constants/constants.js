export const AJAX_ERROR_CODE = {
    USER_NO_LOGIN: 'USER_NO_LOGIN',
    SYSTEM_ERROR: 'SYSTEM_ERROR',
    INVALID_REQUEST: 'INVALID_REQUEST'
};

// 当前域名
// http://localhost || https://kdj.che300.com
const CURRENT_DOMAIN = window.location.protocol + '//' + window.location.hostname;

// 环境变量
export const ENV = (function() {
    if (window.env === 'local') {
        return 'dev';
    } else {
        return window.env;
    }
})();

// 图片基础地址
export const IMG_BASE_URL = 'https://ssl-img.che300.com/inception_img/';

// 视频基础地址
export const VIDEO_BASE_URL = 'http://video.che300.com/inception_video/';

// socket通信地址
export const SOCKET_URL = window.socketUrl || CURRENT_DOMAIN + ':2120';

// 接口地址
export const API_BASE_URL = (function() {
    let basePath = '';
    if (window.location.href.indexOf('dd-') > 0) {
        // 兼容ie
        if (window['context'] === undefined) {
            if (!window.location.origin) {
                window.location.origin =
                    window.location.protocol +
                    '//' +
                    window.location.hostname +
                    (window.location.port ? ':' + window.location.port : '');
            }
            window['context'] = location.origin + '/V6.0';
        }
        basePath = window.location.origin + '/' + window.location.pathname.split('/')[1] + '/';
    } else {
        basePath = window.location.origin + '/';
    }
    return basePath;
})();

// 登录
export const LOGIN_PAGE_URL = API_BASE_URL + 'login';
// 登出
export const LOGIN_OUT = API_BASE_URL + 'logout';
// 事故车类型
export const ACCIDENT_CAR_TYPES = '事故车火烧车泡水车';

// 测试地址
export const DINGJIA_BASE_PATH = (function() {
    let protocol = window.location.protocol;
    if (ENV === 'production') {
        return protocol + '//rpcapi.che300.com/';
    } else if (ENV === 'testing') {
        return protocol + '//rpcapi.ceshi.che300.com/';
    } else if (ENV === 'development') {
        return protocol + '//rpcapi.dev.che300.com/';
    }
})();

// 线上地址
export const DINGJIA_PROD_API = 'https://dingjia.che300.com/';

//查询车史几个接口前缀
export const API_DINGJIA_URL = (function() {
    let protocol = window.location.protocol;
    if (ENV === 'production') {
        return protocol + '//dingjia.che300.com/';
    } else if (ENV === 'testing') {
        return protocol + '//dingjia.ceshi.che300.com/';
    } else if (ENV === 'development') {
        return protocol + '//dingjia.dev.che300.com/';
    }
})();

//open接口前缀
export const API_OPEN_URL = (function() {
    let protocol = window.location.protocol;
    if (ENV === 'production') {
        return protocol + '//open.che300.com/';
    } else if (ENV === 'testing') {
        return protocol + '//open.ceshi.che300.com/';
    } else if (ENV === 'development') {
        return protocol + '//open.dev.che300.com/';
    }
})();

export const CAR_DETAIL_URL = (function() {
    let protocol = window.location.protocol;
    if (ENV === 'production') {
        return protocol + '//open.che300.com/api/models/info/';
    } else if (ENV === 'testing') {
        return protocol + '//open.ceshi.che300.com/api/models/info/';
    } else if (ENV === 'development') {
        return protocol + '//open.dev.che300.com/api/models/info/';
    }
})();
