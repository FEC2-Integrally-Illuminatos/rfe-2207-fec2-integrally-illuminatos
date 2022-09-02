//to be built
import React, { useState } from "react";
import styled from "styled-components";
const axios = require("axios");

var AddReviewForm = function (props) {
  const {closeModal} = props;
  const [Product_id, setProduct_id] = useState(0);
  const [Rating, setRating] = useState(3);
  const [Summary, setSummary] = useState("");
  const [Body, setBody] = useState("");
  const [Recommend, setRecommend] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Photos, setPhotos] = useState([]);
  const [Characteristics, setCharacteristics] = useState({});
  const [Fit, setFit] = useState(3);
  const [Length, setLength] = useState(3);
  const [Comfort, setComfort] = useState(3);
  const [Quality, setQuality] = useState(3);

  // handleSubmit() {

  // }

  // handleChange(e) {

  // }

  return (
    <div> <h1>AddReviewForm</h1>
    <button onClick={()=>closeModal(false)}> X </button>
      <form>
        <label>
          Rating
          <input
            type="text"
            name="title"
            placeholder="input1"
            value=""
            // onChange={}
          />
        </label>
        <br></br>
        <label>
          Summary
          <input
            type="text"
            name="title"
            placeholder="input1"
            value=""
            // onChange={}
          />
        </label>
        <br></br>
        <label>
          Please write a review
          <br></br>
          <textarea name="body" rows="10" cols="50">Tell us what you think about the review</textarea>
        </label>
        <br></br>
        <label>
          Do you recommend this product?
          <input type="radio" id="yes" name="recommend" value="yes" />
          <label for="yes">YES</label>
          <input type="radio" id="no" name="recommend" value="no" />
          <label for="no">NO</label>
        </label>
        <br></br>
        <label>
          What is your name
          <input
            type="text"
            name="name"
            placeholder="Jeff Bezos"
            value=""
            // onChange={}
          />
          <br></br>
        </label>
        <label>
          What is your email?
          <input
            type="text"
            name="email"
            placeholder="jeff@amazon.com"
            value=""
            // onChange={}
          />
          <br></br>
        </label>
        <label>
          Photos Arr
          <input
            type="text"
            name="photos"
            placeholder="photos"
            value=""
            // onChange={}
          />
        </label>
        <br></br>
        <label>
          Describe the Fit :
          <input type="range" min="1" max="5" value="3" name="fit" />
        </label>
        <br></br>
        <label>
          Describe the Length :
          <input type="range" min="1" max="5" value="3" name="length" />
        </label>
        <br></br>
        <label>
          Describe the Comfort :
          <input type="range" min="1" max="5" value="3" name="comfort" />
        </label>
        <br></br>
        <label>
          Describe the Quality :
          <input type="range" min="1" max="5" value="3" name="quality" />
        </label>
      </form>
    </div>
  );
};

export default AddReviewForm;
