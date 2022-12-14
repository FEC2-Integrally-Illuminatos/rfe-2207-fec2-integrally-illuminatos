import React, {useState, useEffect} from 'react';
import Answers from './AnswerDisplay.jsx';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import axios from 'axios';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
margin-bottom: 10px;
width: 90%;
`

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;
  background-color: #B1A6A4;
`

export const HP = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Heading = styled.h3`
  margin: 0 20px 0 0;
  display: inline-block;
`
export default function IndividualQ ({question, questionID, product, count}) {
  if (question[question.length-1] === '.') {
    let array = question.split('');
    let lastIndex = array.length - 1;
    array[lastIndex] = '?';
    array = array.join('');
    question = array;
  } else {
    question = question.includes('?') ? question : question += '?';
  }
  const [allAnswers, setAllAnswers] = useState([]);
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const fetchAnswers = async () => {
    const answers = await axios.get(`/questions/${questionID}`);
      setAllAnswers(answers.data);
      return answers.data;
  }

  useEffect(() => {
    fetchAnswers().then((result) => {
      setDisplayAnswers(result.slice(0, 2))}).catch(console.error)
  }, [])

  return (
    <Wrapper>
      <Body>
          <span onClick={() => {setShowAnswers(!showAnswers)}}>
          <Heading>Q:</Heading><h3 style={{margin: 0, display: 'inline'}}>{question}</h3> </span>
        <HP>
          <Helpful questionId={questionID} count={count}/> |
          <AddAnswer question={question} product={product} questionId={questionID}/>
        </HP>
      </Body>
      {showAnswers && allAnswers.length > 0 && <Answers answers={displayAnswers} fetchAnswers={fetchAnswers} setDisplayAnswers={setDisplayAnswers} allAnswers={allAnswers}/>}
      <br></br>
    </Wrapper>
  )
}