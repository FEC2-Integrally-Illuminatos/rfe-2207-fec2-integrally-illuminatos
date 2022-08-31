import React from 'react';
import Answer from './Answer.jsx';

export default function Answers({answers, wantsMore, showAnswers, fetchAnswers}) {
  answers = wantsMore ? answers : answers.slice(0, 2);
  return (
    <div>
      A: {answers.map((answer) => {
        return (<Answer answer = {answer} key= {answer['answer_id']} fetchAnswers={fetchAnswers}/>)
      })}
      <p>LOAD MORE ANSWERS</p>
    </div>
  )
}