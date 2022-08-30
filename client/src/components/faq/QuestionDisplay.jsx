import React from 'react';
import IndividualQ from './IndividualQ.jsx';

const QuestionDisplay = ({questions, wantsMore}) => {
  return (
    <div>{questions.map((question) => {
      return <IndividualQ question={question['question_body']} key={question['question_id']} questionID={question['question_id']} wantsMore={wantsMore}/>
    })}</div>

  )
}

export default QuestionDisplay;