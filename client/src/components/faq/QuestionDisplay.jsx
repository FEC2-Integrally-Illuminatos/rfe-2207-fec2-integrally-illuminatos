import React from 'react';
import IndividualQ from './IndividualQ.jsx';
import {Container} from './styles/QContainer.styled.js';
import styled from 'styled-components';

const Display = styled.div`
  max-height: 75vh;
  overflow-y: auto;
`



const QuestionDisplay = ({questions, product}) => {
  return (
    <Display>
      {questions.map((question) => {
      return <IndividualQ question={question['question_body']} key={question['question_id']} questionID={question['question_id']} count={question['question_helpfulness']} product={product} />
    })}
    </Display>
  )
}

export default QuestionDisplay;