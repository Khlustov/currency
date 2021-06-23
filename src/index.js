import React from 'react';
import ReactDOM from 'react-dom';
import { Navigator } from './navigation';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigator/>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

