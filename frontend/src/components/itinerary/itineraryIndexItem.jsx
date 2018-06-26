import React, { Component } from 'react';

class ItineraryIndexItem extends Component {
  render () {
    return (
      <div>
        <div className="itinerary-index-item-time">{this.props.time}</div>
        <div className="itinerary-item-content">
            <div className="itinerary-index-item-name">{this.props.name}</div>
            <div className="itinerary-index-item-description">{this.props.description}</div>
            <div className="itinerary-index-item-location">{this.props.location}</div>
            <div className="itinerary-index-item-phone">{this.props.phone}</div>
        </div>
      </div>
    )
  }
}

export default ItineraryIndexItem;
