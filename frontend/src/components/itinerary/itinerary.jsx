import React, { Component } from 'react';
import DailyItinerary from './dailyItinerary';

class Itinerary extends Component {
  render () {
    window.scrollTo(0, 0);
    return (
      <div className="overview-itinerary">
        <div>
          <div className="your">Your</div>
          <div className="trip">Trip</div>
        </div>
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
