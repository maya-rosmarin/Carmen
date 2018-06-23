import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
  registerServiceWorker();
})
