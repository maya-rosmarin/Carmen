import React from 'react';
import Question from './question';

class Questionnaire extends React.Component {
  render () {
    return (
      <div>
        <div>
        <Question text={"Where would you like to go?"}/>
        <div className="city-tile">
          <img className="city-image" src="https://cimg1.ibsrv.net/cimg/www.fodors.com/2000x2000_60-1/273/NewYork-Hero-2000pix-212273.jpg" alt="new york" />
          <img className="city-image" src="https://media.brides.com/photos/59a816ce75cc893b2c4ea6a5/1:1/w_767/tokyo-GettyImages-539678562.jpgg" alt="tokyo" />
          <img className="city-image" src="https://www.klm.com/travel/en/images/AF5CEFCC-29C4-4F75-9460-83522D99FA18_tcm493-517436_456x456_80.jpg" alt="paris" />
        </div>
      </div>
        <Question text={"What's your timeline?"}/>
        <Question text={"What's your budget?"}/>
      </div>
    )
  }
}

export default Questionnaire;
