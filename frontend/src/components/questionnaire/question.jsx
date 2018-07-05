import React from 'react';
import { cityTiles } from './cities';
import { Link, withRouter } from 'react-router-dom';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    // alert('Good choice');
    if (this.props.id === "where") {
      document.getElementById('how-long-input').focus( {preventScroll:true} );
      document.getElementById('how-long').scrollIntoView( {behavior: "smooth"});
    } else if (this.props.id === "how-long") {
      document.getElementById('how-much-input').focus( {preventScroll:true} );
      document.getElementById('how-much').scrollIntoView( {behavior: "smooth"});
    } else if (this.props.id === "how-much") {
      this.props.history.push('/itinerary');
    }
  }

  render () {
    return (
      <div className="question-form" id={this.props.id}>
        <div className="question-text">
          <h1 className="question-text-item">{this.props.text}</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="questionnaire-input"
              type="text"
              id={this.props.textInputId}></input>
          </form>

         {this.props.text === "Where would you like to go?" ? cityTiles() : "" }

         {this.props.text === "What's your budget?" ?
         <Link className="leggo" to="/itinerary">
            <div className="flash">Let's Gooooo!</div>Let's GTFOH!</Link> : "" }

        </div>
      </div>
    )
  }
}

export default withRouter(Question);
