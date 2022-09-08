import React, {useState} from 'react';
import {ModalWrap, Content, Heading, SubHeading, Label, Input, Submit, InputButton, Button, Form, TextArea} from './AnswerModal.jsx';
import axios from 'axios';

export default function QuestionModal({name, productId, setAddQuestion}) {
  const [question, setQuestion] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    //TODO: make some kind of post request
    let submission = {...question, productID: productId }
    axios.post('/qa/questions/questions', submission).then(() => {
      console.log('Question submitted');
      setAddQuestion(false);
    }).catch((err) => {
      console.log('error client posting question: ', err);
    })
  }

  const changeHandler = (e) => {
    e.target.setCustomValidity('');
    let key = e.target.name;
    let value = e.target.value;
    setQuestion((prev) => {
      return {...prev, [key] : e.target.value }
    })
  }
  return (
    <ModalWrap>
      <Content>
        <Heading>Ask Your Question</Heading>
        <SubHeading>{`About the ${name}`}</SubHeading>
        <Form onSubmit={submitHandler}>
          <div>
          <Label>What is your nickname?</Label>
          <Input type="text" maxLength='60' placeholder="Example: jack543!" name="name" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your nickname')}required ></Input>
          <span>For privacy reasons, do not use your full name or email address</span>
          </div>
          <div>
          <Label>Your Question</Label>
          {/* <input type="text" name="body" maxLength="1000" onChange={changeHandler}></input> */}
          <TextArea name="body"  maxLength="1000" rows='7' onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your question')}required></TextArea>
          </div>
          <div>
          <Label>Your Email</Label>
          <Input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your email')} required onChange={changeHandler}></Input>
          For authentication reasons, you will not be emailed
          </div>
          <Submit>
          <InputButton type="submit" value="Submit Question"></InputButton>
          <Button onClick={() => {setAddQuestion(false)}}>Close</Button>
          </Submit>
        </Form>
      </Content>
    </ModalWrap>
  )
}