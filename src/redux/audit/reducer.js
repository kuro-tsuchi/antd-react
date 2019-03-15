import * as types from './action-type'; // Action Types

// state
let initState = {
    result: 'Waiting 。。。'
};

// Reducer
export default function auditReducer(state = initState, action = {}) {
    switch (action.type) {
        case types.AUDIT_UPDATE_INFO:
            return {...state, ...action.data};
        default:
            return state;
    }
}
