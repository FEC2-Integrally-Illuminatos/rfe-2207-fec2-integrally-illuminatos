import React, {useState, useEffect} from 'react';
import ImageThumb from './ImageThumb.jsx';
import ImageDisplay from './ImageDisplay.jsx';
import axios from 'axios';

export default function AnswerModal({name, question, questionId}) {
  const [images, setImages] = useState([]);
  const [answer, setAnswer] = useState({});
  const [urls, setUrls] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    //TODO: make some kind of post request
    let submission = {...answer, photos: urls, questionID: questionId }
    axios.post('/qa/questions/answers', submission).then(() => {
      console.log('Answer submitted')
    }).catch((err) => {
      console.log('error client posting answer: ', err);
    })
  }

  const changeHandler = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setAnswer((prev) => {
      return {...prev, [key] : e.target.value }
    })
  }

  const fileUploader = (e) => {
    //an object of files with numeric keys
    let fileList = e.target.files;
    console.log(fileList)
    //if they select multiple?
    //if they select only one?
    // get valid images
    let validImages = [...fileList].filter((file) =>
        ['image/jpeg', 'image/png'].includes(file.type)
    );
      validImages.forEach((image) => {
        setUrls((prev) => {return [...prev, URL.createObjectURL(image).slice(5)]});
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', (e) => {
          setImages((prev) => [...prev, e.target.result])
        })
      })
  }

  return (
    <div>
      <h4>Submit your Answer</h4>
      <h5>{`${name} : ${question}`}</h5>
      <form onSubmit={submitHandler}>
        <label>Your Answer</label>
        {/* <input type="text" name="body" maxLength="1000" onChange={changeHandler}></input> */}
        <textarea name="body"  maxLength="1000" onChange={changeHandler} required></textarea>
        <label>What is your nickname?</label>
        <input type="text" maxLength='60' placeholder="Example: jack543!" name="name" onChange={changeHandler} required ></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <label>Your Email:</label>
        <input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" required onChange={changeHandler}></input>
        For authentication reasons, you will not be emailed
        <label>Upload Your Photos</label>
       { images.length < 5 && <input type="file" name="image" accept="image/png, image/jpeg"onChange={fileUploader} multiple></input>}
        {/* <input type="submit" name="submit" value="Upload"></input> */}
        <input type="submit" value="Submit Answer"></input>
        {images.length > 0 && <ImageDisplay images={images}/>}
      </form>
    </div>
  )
}