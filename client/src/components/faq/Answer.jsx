import React from 'react';
import User from './User.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';

export default function Answer({answer}) {
  return (
    <div>
      {answer.body}<br></br>
    <User name={answer['answerer_name']} date={answer.date}/>
    <Helpful count={answer.helpfulness} answerId={answer['answer_id']}/> | <Report answerId={answer['answer_id']}/>
    <br></br>
    </div>
  )
}