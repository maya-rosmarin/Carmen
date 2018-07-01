import React from 'react';
import Question from './question';

class Questionnaire extends React.Component {
  render () {
    return (
      <div>
        <Question text={"Where would you like to go?"} next="#timeline"/>
        <Question id="timeline" text={"What's your timeline?"} next="budget"/>
        <Question id="budget" text={"What's your budget?"}/>
      </div>
    )
  }
}

export default Questionnaire;
