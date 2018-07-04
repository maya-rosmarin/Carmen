import React from 'react';
import Question from './question';
import { HashLink as Link } from 'react-router-hash-link';


class Questionnaire extends React.Component {
  render () {
    return (
      <div>
        <Question id={"where"} text={"Where would you like to go?"}/>
        <Question id={"how-long"} text={"What's your timeline?"}/>
        <Question id={"how-much"} text={"What's your budget?"}/>
      </div>
    )
  }
}

export default Questionnaire;
