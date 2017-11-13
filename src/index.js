import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { updateFetchConfig } from '@fyresite/fetch';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './redux/reducers';

import App from './containers/App';

// Setup fetch for servers
updateFetchConfig({
  'localhost': 'localhost:3000'
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
