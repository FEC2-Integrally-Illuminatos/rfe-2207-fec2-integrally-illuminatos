import React, {useState} from 'react';
import {ModalWrap, Content} from './AnswerModal.jsx';
import axios from 'axios';
import {Label} from './AnswerModal.jsx';

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
        <h4>Ask Your Question</h4>
        <h5>{`About the ${name}`}</h5>
        <form onSubmit={submitHandler}>
          <Label>Your Question</Label>
          {/* <input type="text" name="body" maxLength="1000" onChange={changeHandler}></input> */}
          <textarea name="body"  maxLength="1000" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your question')}required></textarea>
          <Label>What is your nickname?</Label>
          <input type="text" maxLength='60' placeholder="Example: jack543!" name="name" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your nickname')}required ></input>
          <p>For privacy reasons, do not use your full name or email address</p>
          <Label>Your Email:</Label>
          <input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your email')} required onChange={changeHandler}></input>
          For authentication reasons, you will not be emailed
          {/* <input type="submit" name="submit" value="Upload"></input> */}
          <input type="submit" value="Submit Question"></input>
          <button onClick={() => {setAddQuestion(false)}}>Close</button>
        </form>
      </Content>
    </ModalWrap>
  )
}