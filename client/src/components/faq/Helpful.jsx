import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const HelpfulContainer = styled.div`
  margin: auto 10px;
`

export default function Helpful({count, answerId, questionId}) {
  const [helpCount, setHelpCount] = useState(count);
  const [isHelpful, setIsHelpful] = useState(false);
  const body = answerId ? {'answerId': answerId } : {'questionId': questionId }

  const helpfulClickHandler = (e) => {
    if (!isHelpful) {
      let endpoint = answerId ? 'answer' : 'question'
      axios.put(`/qa/questions/${endpoint}_helpful`, body).then((response) => {
        console.log(response);
        setHelpCount(helpCount + 1)
      }).catch((err) => {
        console.log('helpful', err)
      })
      setIsHelpful(true);
    }
  }
  return (<HelpfulContainer>Helpful? <span onClick={helpfulClickHandler}><u>Yes</u>{` (${helpCount})`} </span></HelpfulContainer>)
}