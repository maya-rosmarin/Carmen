import React from 'react';
import '../assets/stylesheets/question.css'

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  render () {
    return (
      <div className="question-form">
        <div className="question-text">
          <h1 className="question-text-item">{this.props.text}</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Question;
