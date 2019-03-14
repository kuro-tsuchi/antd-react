import * as types from './action-type'; // Action Types

// Action Creators
/**
 * @method 更新 Home 信息
 * @param {Object} data
 */
export function updateHomeInfo(data) {
    return {
        type: types.UPDATE_INFO,
        data
    };
}

// 重置 Home 信息
export function resetHomeInfo() {
    return function(dispatch, getState) {
        dispatch(
            updateHomeInfo({
                name: 'Home'
            })
        );
    };
}
