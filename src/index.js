import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import '98.css';

import App from './App';
import store from "./App/Stores/store"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
