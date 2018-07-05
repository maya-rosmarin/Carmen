import React from 'react';
import Question from './question';
import { HashLink as Link } from 'react-router-hash-link';


class Questionnaire extends React.Component {

  componentDidMount() {
    document.getElementById('where-input').focus();
  }

  render () {
    window.scrollTo(0, 0);
    return (
      <div>
        <Question id={"where"} text={"Where would you like to go?"} textInputId={"where-input"}/>
        <Question id={"how-long"} text={"What's your timeline?"}  textInputId={"how-long-input"}/>
        <Question id={"how-much"} text={"What's your budget?"}  textInputId={"how-much-input"}/>
      </div>
    )
  }
}

export default Questionnaire;
