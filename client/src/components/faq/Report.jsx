import React, {useState} from 'react';
import axios from 'axios';

export default function Report({answerId, questionId}) {
  const [isReported, setIsReported] = useState(false);
  const body = answerId ? {'answerId': answerId } : {'questionId': questionId }
  const handleReportClick = (e) => {
    if (!isReported) {
      console.log(answerId);
      let endpoint = answerId ? 'answer' : 'question'
      axios.put(`/qa/questions/${endpoint}_report`, body).then((response) => {
        console.log(response);
        setIsReported(true);
        //TODO: should make a GET request to re-render the list?
      }).catch((err) => {
        console.log('report', err)
      })
    }
  }
  return (<span onClick={handleReportClick}>{!isReported ? <u>Report</u> : 'Report'}</span>)
}