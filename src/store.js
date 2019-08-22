import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import regeneratorRuntime from 'regenerator-runtime';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
//import rootReducer from './Reducers/rootReducer';
import rootSaga from './Utils/rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './Reducers/rootReducer';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer(history), 
  composeWithDevTools(applyMiddleware(
                            sagaMiddleware, 
                            routerMiddleware(history), 
                            logger)));

sagaMiddleware.run(rootSaga);

export default store;