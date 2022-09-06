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

export default function Answers({answers, requestCount, showAnswers, fetchAnswers, setRequestCount, setDisplayAnswers, allAnswers}) {
  const handleMoreAnswers = () => {
    //when this is clicked, need to show more answers
    // setRequestCount(requestCount + 1);
    // if (answers.length !== requestCount) {
    //    setDisplayAnswers(allAnswers.slice(0, (2 * requestCount)));
    // } else {
    //   fetchAnswers().catch(console.error);
    // }

    //display all the answers
    setDisplayAnswers(allAnswers);
  }
  return (
    <Div>
      <Heading>A:</Heading>
      <AnswerBlock>
      {answers.map((answer) => {
        return (<Answer answer = {answer} key= {answer['answer_id']} fetchAnswers={fetchAnswers}/>)
      })}
      <button onClick={handleMoreAnswers}>SEE MORE ANSWERS</button>

      </AnswerBlock>
    </Div>
  )
}