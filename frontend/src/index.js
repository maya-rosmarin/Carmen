import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';
//test
import { fetchFlights } from './actions/flight_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<HashRouter><App store={store} /></HashRouter>, root);
  registerServiceWorker();

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// test
window.fetchFlights = fetchFlights;
