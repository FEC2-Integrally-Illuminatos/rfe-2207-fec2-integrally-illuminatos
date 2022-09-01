import React from 'react';
import User from './User.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import {Wrapper, HP} from './IndividualQ.jsx';
import styled from 'styled-components';


const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const Image = styled.img`
  margin: 5px;
`

const Body = styled.div`
  display: flex;
  justify-content: flex-start;
`

export default function Answer({answer, fetchAnswers}) {
  return (
    <Wrapper>
      {answer.body}<br></br>
      {answer.photos.length > 0 && <Div>{answer.photos.map((photo) => {
        return (<Image src={photo.url} alt="uploaded photo" key={photo.id} width="80" height="auto"></Image>)
      })}</Div>}
      <Body>
    <User name={answer['answerer_name']} date={answer.date}/>
      <HP> |
    <Helpful count={answer.helpfulness} answerId={answer['answer_id']}/> | <Report answerId={answer['answer_id']} fetchAnswers={fetchAnswers}/>
      </HP>
      </Body>
    </Wrapper>
  )
}