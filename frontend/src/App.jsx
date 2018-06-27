import React, { Component } from 'react';
import Questionnaire from './components/questionnaire/questionnaire';
import Itinerary from './components/itinerary/itinerary';
import { Route } from 'react-router-dom';
import './assets/stylesheets/question.css';
import './assets/stylesheets/itinerary.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Questionnaire} />
        <Route exact path="/itinerary" component={Itinerary} />
      </div>
    );
  }
}

export default App;
