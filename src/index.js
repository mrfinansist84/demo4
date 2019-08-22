import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, {history} from './store.js';
import App from './App.js';
import './index.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'


const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
      
      <App history = {history} />
    
    </Provider>,
    document.getElementById('root')
);
