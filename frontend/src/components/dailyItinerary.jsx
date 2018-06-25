import React, { Component } from 'react';
import ItineraryIndexItem from './itineraryIndexItem';

class DailyItinerary extends Component {
  render () {
    return (
      <div>
        <div className="daily-heading">Day {this.props.day}</div>
          <ItineraryIndexItem name={"Tokyo Tower"} />
          <ItineraryIndexItem name={"Tokyo Tower"} />
          <ItineraryIndexItem name={"Tokyo Tower"} />
      </div>
    )
  }
}

export default DailyItinerary;
