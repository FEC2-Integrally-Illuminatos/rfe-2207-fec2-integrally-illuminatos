import React, {useState, useEffect} from 'react';
import ImageThumb from './ImageThumb.jsx';
import ImageDisplay from './ImageDisplay.jsx';

export default function Modal({name, question}) {
  const [images, setImages] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    //TODO: make some kind of post request
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
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', (e) => {
          setImages((prev) => [...prev, e.target.result])
        })
      })
      console.log(images)

    // reader.readAsDataURL(e.target.files[0])
    // reader.addEventListener('load', (e) => {
    //   console.log(e.target.result)
    //   setImages(...images, e.target.result);
    // })
  }

  return (
    <div>
      <h3>Submit your Answer</h3>
      <h4>{`${name} : ${question}`}</h4>
      <form onSubmit={submitHandler}>
        <label>Username:</label>
        <input type="text" name="username" required></input>
        <label>What is your nickname?</label>
        <input type="text" maxlength='60' placeholder="Example: jack543!" name="nickname" required></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <label>Email:</label>
        <input type="email" maxLength='60' placeholder="Example: jack@email.com" name="email" required></input>
        For authentication reasons, you will not be emailed
        <label>Upload images</label>
       { images.length < 5 && <input type="file" name="image" accept="image/png, image/jpeg"onChange={fileUploader} multiple></input>}
        {/* <input type="submit" name="submit" value="Upload"></input> */}
        <input type="submit" value="Submit Answer"></input>
        {images.length > 0 && <ImageDisplay images={images}/>}
      </form>
    </div>
  )
}