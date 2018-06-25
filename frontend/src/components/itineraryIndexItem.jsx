import React, { Component } from 'react';

class ItineraryIndexItem extends Component {
  render () {
    return (
      <div>
        <div className="itinerary-index-item-name">{this.props.name}</div>
      </div>
    )
  }
}

export default ItineraryIndexItem;
