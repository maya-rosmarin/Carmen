import React from 'react';
import Question from './question';

class Questionnaire extends React.Component {
  render () {
    return (
      <div>
        <Question text={"Where would you like to go?"}/>
        <Question text={"What's your timeline?"}/>
        <Question text={"What's your budget?"}/>
      </div>
    )
  }
}

export default Questionnaire;
