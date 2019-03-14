import {combineReducers} from 'redux';

import homeReducer from './home/reducer';

const reducers = {
    home: homeReducer
};

export default combineReducers(reducers);
