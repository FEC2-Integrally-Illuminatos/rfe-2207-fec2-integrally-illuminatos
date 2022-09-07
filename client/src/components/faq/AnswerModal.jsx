import React, {useState, useEffect} from 'react';
import ImageThumb from './ImageThumb.jsx';
import ImageDisplay from './ImageDisplay.jsx';
import styled from 'styled-components';
import axios from 'axios';

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #97A3BF;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
  width: 80%;
  height: 60%;
`

export const Label = styled.label`
  display: inline-block;
  font: bold 1.5rem;
  margin-bottom: 0.5rem;
  &:after {
    content: "*";
    color: red;
  }
`
const PhotoLabel = styled.label`
  display: inline-block;
  font: bold 1.5rem;
  margin-bottom: 0.5rem;
`
const Form = styled.form`
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  border: 4px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

const Input = styled.input`
  border: 2px solid #333;
  background-color: white;
  border-radius: 0.25rem;
  font: 1.25rem;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.75rem;
  &::placeholder {
    opacity: 1;
    color:  #A9A9AC;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #E98074;
  }
`
const TextArea = styled.textarea`
  border: 2px solid #333;
  background-color: white;
  border-radius: 0.25rem;
  font: 1.25rem;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.75rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #E98074;
  }
`
const Submit = styled.div`
  grid-column: span 2;
`
const Button = styled.input`
  font: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  background-color: #E98074;
  color: white;
  border-color: transparent;
  &:hover {
    background-color: #c75c50;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px black;
  }
`

export default function AnswerModal({name, question, questionId, setIsOpen}) {
  const [images, setImages] = useState([]);
  const [answer, setAnswer] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    let submission = {...answer, photos: images, questionID: questionId }
    axios.post('/qa/questions/answers', submission).then(() => {
      console.log('Answer submitted');
      setIsOpen(false);
    }).catch((err) => {
      console.log('error client posting answer: ', err);
    })
  }

  const changeHandler = (e) => {
    e.target.setCustomValidity('');
    let key = e.target.name;
    let value = e.target.value;
    setAnswer((prev) => {
      return {...prev, [key] : e.target.value }
    })
  }

  const handleImageChange = (e) => {
    let fileList = e.target.files;
    console.log(fileList)
    let validImages = [...fileList].filter((file) =>
        ['image/jpeg', 'image/png'].includes(file.type)
    );
      validImages.forEach((image) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', (e) => {
          setImages((prev) => [...prev, e.target.result])
        })
      })
  }

  return (
    <ModalWrap>
      <Content>
        <h4>Submit your Answer</h4>
        <h5>{`${name} : ${question}`}</h5>
        <Form onSubmit={submitHandler}>
          <div>
          <Label>What is your nickname?</Label>
          <Input type="text" maxLength='60' placeholder="Example: jack543!" name="name" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your nickname')}required ></Input>
          <span>For privacy reasons, do not use your full name or email address</span>
          </div>
          <div>
          <Label className='required'>Your Answer</Label>
          {/* <input type="text" name="body" maxLength="1000" onChange={changeHandler}></input> */}
          <TextArea name="body"  maxLength="1000" rows='7' onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your answer')} required></TextArea>
          </div>
          <div>
          <Label>Your Email</Label>
          <Input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" required onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your email')}></Input>
          For authentication reasons, you will not be emailed
          </div>
          <div>
          <PhotoLabel>Upload Your Photos</PhotoLabel>
        { images.length < 5 && <Input type="file" name="image" accept="image/png, image/jpeg"onChange={handleImageChange} multiple onError={(e) => e.target.setCustomValidity('You must enter the following: png or jpeg image')}></Input>}
          {/* <input type="submit" name="submit" value="Upload"></input> */}
          {images.length > 0 && <ImageDisplay images={images}/>}
          </div>
          <Submit>
          <Button type="submit" value="Submit Answer"></Button>
          </Submit>
        </Form>
        <button onClick={() => {setIsOpen(false)}}>Close</button>
      </Content>
    </ModalWrap>
  )
}