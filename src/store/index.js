import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';

import rootSaga from 'store/sagas';

import reducers from './reducers';

const sagaMiddleware = saga();

// eslint-disable-next-line import/no-mutable-exports
const {
    routerReducer, createReduxHistory, routerMiddleware,
} = createReduxHistoryContext({ history: createBrowserHistory() });

const middleware = [routerMiddleware, sagaMiddleware];

// eslint-disable-next-line max-len
const store = createStore(reducers(routerReducer), composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;

export const history = createReduxHistory(store);
