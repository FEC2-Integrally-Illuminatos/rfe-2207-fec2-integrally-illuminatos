import React from 'react';
import IndividualQ from './IndividualQ.jsx';

const QuestionDisplay = ({questions, wantsMore}) => {
  return (
    <div>{questions.map((question) => {
      return <IndividualQ question={question['question_body']} key={question['question_id']} questionID={question['question_id']} wantsMore={wantsMore} count={question['question_helpfulness']}/>
    })}</div>

  )
}

export default QuestionDisplay;