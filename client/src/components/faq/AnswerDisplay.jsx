import React from 'react';
import Answer from './Answer.jsx';

export default function Answers({answers}) {

  return (
    <div>
      A: {answers.map((answer) => {
        return (<Answer answer = {answer.body} key= {answer['answer_id']}/>)
      })}
    </div>
  )
}