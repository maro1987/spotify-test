import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import './styles/core.scss';

const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(hashHistory), promiseMiddleware);

const finalCreateStore = createStoreWithMiddleware(createStore);

const store = finalCreateStore(reducers);

const history = syncHistoryWithStore(hashHistory, store);
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/reducers', () => {
    const nextRootReducer = require('./reducers/reducers');

    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(<App store={store} history={history} />, document.getElementById('app'));
