import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #D8CFD0;
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

export default function Answers({answers, fetchAnswers, setDisplayAnswers, allAnswers}) {

  const [seeMore, setSeeMore] = useState(false);

  const handleMoreAnswers = () => {
    setSeeMore(!seeMore);
  }

  useEffect(()=> {
    if (seeMore) {
      setDisplayAnswers(allAnswers);
    } else {
      setDisplayAnswers(allAnswers.slice(0,2))
    }
  }, [seeMore]);

  return (
    <Div>
      <Heading>A:</Heading>
      <AnswerBlock>
      {answers.map((answer) => {
        return (<Answer answer = {answer} key= {answer['answer_id']} fetchAnswers={fetchAnswers}/>)
      })}
      <button onClick={handleMoreAnswers}>{seeMore ? 'COLLAPSE ANSWERS' : 'SEE MORE ANSWERS'}</button>
      </AnswerBlock>
    </Div>
  )
}