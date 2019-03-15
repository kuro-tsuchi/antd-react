import * as types from './action-type'; // Action Types

// Action Creators
/**
 * @method 更新 Audit 信息
 * @param {Object} data
 */
export function updateAuditInfo(data) {
    return {
        type: types.AUDIT_UPDATE_INFO,
        data
    };
}

// 重置 Audit 信息
export function resetAuditInfo() {
    return function(dispatch, getState) {
        dispatch(
            updateAuditInfo({
                result: 'Waiting 。。。'
            })
        );
    };
}
