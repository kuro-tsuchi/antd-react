import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
    let middleware;

    // 线上不需要打印state日志
    middleware = [thunk, createLogger];

    // redux的store对象
    const store = createStore(
        rootReducer, // 注册action的处理逻辑
        initialState,
        compose(applyMiddleware(...middleware))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
