import React from 'react';
import IndividualQ from './IndividualQ.jsx';

const QuestionDisplay = ({questions}) => {
  return (
    <div>{questions.map((question) => {
      return <IndividualQ question={question['question_body']} key={question['question_id']} questionID={question['question_id']}/>
    })}</div>

  )
}

export default QuestionDisplay;