import * as types from './action-type'; // Action Types

// state
let initState = {
    name: '我是大英雄'
};

// Reducer
export default function homeReducer(state = initState, action = {}) {
    switch (action.type) {
        case types.UPDATE_INFO:
            return {...state, ...action.data};
        default:
            return state;
    }
}
