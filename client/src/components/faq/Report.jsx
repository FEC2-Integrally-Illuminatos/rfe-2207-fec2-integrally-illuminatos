import React, {useState} from 'react';
import axios from 'axios';
import {HelpfulContainer} from './Helpful.jsx';

export default function Report({answerId, questionId, fetchAnswers}) {
  const [isReported, setIsReported] = useState(false);
  const body = answerId ? {'answerId': answerId } : {'questionId': questionId }
  const handleReportClick = (e) => {
    if (!isReported) {
      let endpoint = answerId ? 'answer' : 'question'
      axios.put(`/qa/questions/${endpoint}_report`, body).then((response) => {
        console.log(response);
        setIsReported(true);
        //TODO: should make a GET request to re-render the
          if (answerId) {
            fetchAnswers().catch(console.error)
          }
      }).catch((err) => {
        console.log('report', err)
      })
    }
  }
  return (<HelpfulContainer><span onClick={handleReportClick}>{!isReported ? <u>Report</u> : 'Reported'}</span></HelpfulContainer>)
}