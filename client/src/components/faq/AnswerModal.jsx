import React, {useState, useEffect} from 'react';
import ImageThumb from './ImageThumb.jsx';
import ImageDisplay from './ImageDisplay.jsx';
import styled from 'styled-components';
import axios from 'axios';
// import {Image} from 'cloudinary-react';

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
  background-color: white;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  width: 80%;
`

export const Label = styled.label`
  &:after {
    content: "*";
    color: red;
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
    //if they select multiple?
    //if they select only one?
    // get valid images
    let validImages = [...fileList].filter((file) =>
        ['image/jpeg', 'image/png'].includes(file.type)
    );
      validImages.forEach((image) => {
        // setUrls((prev) => {return [...prev, URL.createObjectURL(image).slice(5)]});
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', (e) => {
          console.log(e.target.result);
          setImages((prev) => [...prev, e.target.result])
        })
      })
  }

  return (
    <ModalWrap>
      <Content>
        <h4>Submit your Answer</h4>
        <h5>{`${name} : ${question}`}</h5>
        <form onSubmit={submitHandler}>
          <Label className='required'>Your Answer</Label>
          {/* <input type="text" name="body" maxLength="1000" onChange={changeHandler}></input> */}
          <textarea name="body"  maxLength="1000" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your answer')} required></textarea>
          <Label>What is your nickname?</Label>
          <input type="text" maxLength='60' placeholder="Example: jack543!" name="name" onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your nickname')}required ></input>
          <p>For privacy reasons, do not use your full name or email address</p>
          <Label>Your Email:</Label>
          <input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" required onChange={changeHandler} onInvalid={(e) => e.target.setCustomValidity('You must enter the following: Your email')}></input>
          For authentication reasons, you will not be emailed
          <label>Upload Your Photos</label>
        { images.length < 5 && <input type="file" name="image" accept="image/png, image/jpeg"onChange={handleImageChange} multiple></input>}
          {/* <input type="submit" name="submit" value="Upload"></input> */}
          <input type="submit" value="Submit Answer"></input>
          {images.length > 0 && <ImageDisplay images={images}/>}
        </form>
        <button onClick={() => {setIsOpen(false)}}>Close</button>
      </Content>
    </ModalWrap>
  )
}