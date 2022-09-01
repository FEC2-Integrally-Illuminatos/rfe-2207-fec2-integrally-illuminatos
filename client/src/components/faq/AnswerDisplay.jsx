import React from 'react';
import Answer from './Answer.jsx';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
`
const AnswerBlock = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
`
export const Heading = styled.h3`
  margin: 0px;
`

export default function Answers({answers, wantsMore, showAnswers, fetchAnswers}) {
  answers = wantsMore ? answers : answers.slice(0, 2);
  return (
    <Div>
      <Heading>A:</Heading>
      <AnswerBlock>
      {answers.map((answer) => {
        return (<Answer answer = {answer} key= {answer['answer_id']} fetchAnswers={fetchAnswers}/>)
      })}
      <p>LOAD MORE ANSWERS</p>

      </AnswerBlock>
    </Div>
  )
}