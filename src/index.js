import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap CSS
import App from './App';

import { Provider } from 'react-redux'; 
import store from './store/configure'; 

ReactDOM.render(
  
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')

);

