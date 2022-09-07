import React, {useState} from 'react';
import User from './User.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import {Wrapper, HP} from './IndividualQ.jsx';
import styled from 'styled-components';
import {ModalWrap} from './AnswerModal.jsx';


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

const Img = styled.img`
  margin: auto;
  display: block;
  border-radius: 8px;
  width: 60%;
  height: auto;
  max-height: 70%;
`
const Content = styled.div`
  background-color: #D8CFD0;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
  width: 80%;
  height: auto;
  max-height: 90%;
`

const CloseBtn = styled.button`
  color:black;
  font-size: 35px;
  padding: 20px;
  outline: none;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  &:hover {
    color: rgb(255, 255, 255);
  }
`
export default function Answer({answer, fetchAnswers}) {
  const [openImg, setOpenImg] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const popUpImg = (src) => {
    setOpenImg(!openImg);
    setImgSrc(src);
  }
  return (
    <Wrapper>
      {answer.body}<br></br>
      {answer.photos.length > 0 && <Div>{answer.photos.map((photo) => {
        return (
          <>
            <Image onClick={() => {popUpImg(photo.url)}} src={photo.url} alt="uploaded photo" key={photo.id} width="80" height="auto" key={photo.url}></Image>
            {openImg && <ModalWrap><Content>
              <CloseBtn onClick={() => {setOpenImg(false)}}>X</CloseBtn>
              <Img src={imgSrc}></Img>
              </Content></ModalWrap> }
          </>
          )
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