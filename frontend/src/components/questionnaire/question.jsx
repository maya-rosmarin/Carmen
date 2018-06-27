import React from 'react';
import { cityTiles } from './cities';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    alert('Good choice')
  }

  render () {
    return (
      <div className="question-form">
        <div className="question-text">
          <h1 className="question-text-item">{this.props.text}</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="questionnaire-input" type="text"></input>
          </form>
         {this.props.text === "Where would you like to go?" ? cityTiles() : "" }

         {this.props.text === "What's your budget?" ?
         <Link className="leggo" to="/itinerary"><div className="flash">Let's Gooooo!</div>Let's GTFOH!</Link> : "" }

        </div>
      </div>
    )
  }
}

export default Question;
