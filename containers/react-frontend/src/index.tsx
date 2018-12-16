import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { FoxesContainer } from "./containers/FoexesContainers"
import { reducers } from "./reducers"
import { rootSaga } from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducers, enhancer)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><FoxesContainer /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
