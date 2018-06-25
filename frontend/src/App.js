import React, { Component } from 'react';
import Questionnaire from './components/questionnaire';
import Itinerary from './components/itinerary';

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
