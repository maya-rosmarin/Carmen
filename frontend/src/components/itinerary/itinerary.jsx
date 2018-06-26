import React, { Component } from 'react';
import DailyItinerary from './dailyItinerary';

class Itinerary extends Component {
  render () {
    return (
      <div className="overview-itinerary">
        <div className="your-trip">Your Trip</div>
        <DailyItinerary day={"1"} />
        <DailyItinerary day={"2"} />
        <DailyItinerary day={"3"} />
        <DailyItinerary day={"4"} />
        <DailyItinerary day={"5"} />
        <DailyItinerary day={"6"} />
      </div>
    )
  }
}

export default Itinerary;
