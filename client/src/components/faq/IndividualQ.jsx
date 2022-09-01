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
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HP = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Heading = styled.h3`
  margin: 0 20px 0 0;
  display: inline-block;
`
export default function IndividualQ ({question, questionID, wantsMore, count, product}) {
  question = question.includes('?') ? question : question +='?';
  const [allAnswers, setAllAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const fetchAnswers = async () => {
    const answers = await axios.get(`qa/questions/${questionID}`);
    let result = answers.data.results.sort((a, b) => {
      return b.helpfulness - a.helpfulness
     });
     setAllAnswers(result);
  }

  useEffect(() => {
    fetchAnswers().catch(console.error)
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
      {showAnswers && <Answers answers={allAnswers} wantsMore={wantsMore} showAnswers={showAnswers} fetchAnswers={fetchAnswers}/>}
      <br></br>
    </Wrapper>
  )
}