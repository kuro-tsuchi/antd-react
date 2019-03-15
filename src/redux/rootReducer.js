import {combineReducers} from 'redux';

import auditReducer from './audit/reducer'; // 审核

const reducers = {
    audit: auditReducer
};

export default combineReducers(reducers);
