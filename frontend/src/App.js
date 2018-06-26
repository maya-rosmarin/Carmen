import React, { Component } from 'react';
import Questionnaire from './components/questionnaire/questionnaire';
import Itinerary from './components/itinerary/itinerary';
import './assets/stylesheets/question.css';
import './assets/stylesheets/itinerary.css';

class App extends Component {
  render() {
    return (
      <div>
        <Questionnaire />
        <Itinerary />
      </div>
    );
  }
}

export default App;
