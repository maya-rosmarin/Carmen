import React from 'react';
import ItineraryIndexItem from './ItineraryIndexItem';

class DailyItinerary extends Component {
  render () {
    return (
      <div>
        <div className="daily-heading">
          <ItineraryIndexItem />
        </div>
      </div>
    )
  }
}

export default DailyItinerary;
