import React from 'react';
import User from './User.jsx';

export default function Answer({answer}) {
  return (
    <div>
      {answer.body}<br></br>
    <User name={answer['answerer_name']} date={answer.date}/><br></br>
    </div>
  )
}