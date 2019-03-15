/*
 * @Author: wqjiao
 * @Date: 2019-03-15 18:32:17
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 18:32:40
 * @Description: sessionStorage 清空 router 产生的多余的 session
 */
export default function() {
    try {
        let sessionLength = window.sessionStorage.length;
        let sessionKeys = [];
        // 遍历key中包含@@History的项
        for (let i = 0; i < sessionLength; i++) {
            if (window.sessionStorage.key(i).match('@@History')) {
                sessionKeys.push(window.sessionStorage.key(i));
            }
        }
        // 删除该项session
        for (let j = 0; j < sessionKeys.length; j++) {
            window.sessionStorage.removeItem(sessionKeys[j]);
        }
    } catch (err) {
        window.Raven && window.Raven.captureException(err);
    }
}
