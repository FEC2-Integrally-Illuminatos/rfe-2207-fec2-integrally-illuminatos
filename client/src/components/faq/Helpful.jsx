import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Helpful({count, answerId, questionId}) {
  const [helpCount, setHelpCount] = useState(count);
  const body = answerId ? {'answerId': answerId } : {'questionId': questionId }

  const helpfulClickHandler = (e) => {
    axios.put('/qa/questions/answer_helpful', body).then((response) => {
      console.log(response);
      setHelpCount(helpCount + 1)
    }).catch((err) => {
      console.log('helpful', err)
    })
  }
  return (<span>Helpful? <span onClick={helpfulClickHandler}><u>Yes</u>{` (${helpCount})`} </span></span>)
}