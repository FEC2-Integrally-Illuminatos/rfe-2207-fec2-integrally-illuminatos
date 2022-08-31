import React from 'react';
import {FAQWrapper} from './faq/styles/FAQWrapper.styled.js';
import Wrapper from './faq/QuestionWrapper.jsx';

const App = () => {
  return (
    <>
    <h1>Questions & Answers</h1>
    <FAQWrapper>
    <Wrapper/>
    </FAQWrapper>
    </>
  )
}

export default App;

