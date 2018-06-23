import React from 'react';

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
      <div>
        <h1 className="question-form">{this.props.text}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"></input>
        </form>
      </div>
    )
  }
}

export default Question;
