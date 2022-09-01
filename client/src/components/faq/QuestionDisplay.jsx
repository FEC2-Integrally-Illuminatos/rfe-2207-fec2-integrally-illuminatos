import React from 'react';
import IndividualQ from './IndividualQ.jsx';
import {Container} from './styles/QContainer.styled.js';

const QuestionDisplay = ({questions, wantsMore, product}) => {
  return (
    <>{questions.map((question) => {
      return <IndividualQ question={question['question_body']} key={question['question_id']} questionID={question['question_id']} wantsMore={wantsMore} count={question['question_helpfulness']} product={product} />
    })}</>

  )
}

export default QuestionDisplay;