//to be built
import React, { useState } from "react";
import styled from "styled-components";
const axios = require("axios");

const ModalWrap = styled.div`
  background-color: #F5F5DC;
  position: fixed;
  z-index: 4;
  left: 20%;
  right: 20%;
  top: 0%;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;
var BC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  width: 200px;
  font-size: 20px;
  font-family: Karla;
`;
const Qwrap = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: start;
`;
const Awrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const Twrap = styled.div`
  display: flex;
  font-family: Karla;
  font-size: 40px;
  font-weight: bold;
`;
var AddReviewForm = function (props) {
  const { closeModal, submitReview } = props;

  const [Product_id, setProduct_id] = useState(0);
  const [state, setState] = useState({
    rating: 3,
    recommend: true,
    size: 3,
    width: 3,
    comfort: 3,
    quality: 3,
    length: 3,
    fit: 3,
    summary: "",
    body: "",
    photos: [],
    name: "",
    email: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  return (
    <ModalWrap>
      {" "}
      <Twrap>Write your review</Twrap>
      <Qwrap>
        Rate This Product
        <input
          type="range"
          name="rating"
          min="1"
          max="5"
          value={state.rating}
          onChange={handleChange}
        />
      </Qwrap>
      <Qwrap>Do you recommend this product?</Qwrap>
      <Awrap>
        <input
          type="radio"
          name="Recommend"
          value={true}
          onChange={handleChange}
          checked
          required
        />
        <lable for="Yes">Yes</lable>
        <input
          type="radio"
          name="Recommend"
          value={false}
          onChange={handleChange}
        />
        <lable for="No">No</lable>
      </Awrap>
      <Qwrap>Was this product true to its size?</Qwrap>
      <Awrap>
        <input type="radio" name="size" value={1} onChange={handleChange} />
        <lable for="1">A size too small</lable>
        <input type="radio" name="size" value={2} onChange={handleChange} />
        <lable for="2">1/2 a size too small</lable>
        <input type="radio" name="size" value={3} onChange={handleChange} />
        <lable for="3">Perfect</lable>
        <input type="radio" name="size" value={4} onChange={handleChange} />
        <lable for="4">1/2 a size too big</lable>
        <input type="radio" name="size" value={5} onChange={handleChange} />
        <lable for="5">A size too wide</lable>
      </Awrap>
      <Qwrap>Was this product true to its width?</Qwrap>
      <Awrap>
        <input type="radio" name="width" value={1} onChange={handleChange} />
        <lable for="1">Too narrow</lable>
        <input type="radio" name="width" value={2} onChange={handleChange} />
        <lable for="2">Slightly narrow</lable>
        <input type="radio" name="width" value={3} onChange={handleChange} />
        <lable for="3">Perfect</lable>
        <input type="radio" name="width" value={4} onChange={handleChange} />
        <lable for="4">Slightly wide</lable>
        <input type="radio" name="width" value={5} onChange={handleChange} />
        <lable for="5">Too wide</lable>
      </Awrap>
      <Qwrap>Was this product comfortable?</Qwrap>
      <Awrap>
        <input type="radio" name="comfort" value="1" onChange={handleChange} />
        <lable for="1">Uncomfortable</lable>
        <input type="radio" name="comfort" value="2" onChange={handleChange} />
        <lable for="2">Slightly uncomfortable</lable>
        <input type="radio" name="comfort" value="3" onChange={handleChange} />
        <lable for="3">OK</lable>
        <input type="radio" name="comfort" value="4" onChange={handleChange} />
        <lable for="4">Comfortable</lable>
        <input type="radio" name="comfort" value="5" onChange={handleChange} />
        <lable for="5">Perfect</lable>
      </Awrap>
      <Qwrap>How was the quality of this product?</Qwrap>
      <Awrap>
        <input type="radio" name="quality" value="1" onChange={handleChange} />
        <lable for="1">Poor</lable>
        <input type="radio" name="quality" value="2" onChange={handleChange} />
        <lable for="2">Below Average</lable>
        <input type="radio" name="quality" value="3" onChange={handleChange} />
        <lable for="3">What I expected</lable>
        <input type="radio" name="quality" value="4" onChange={handleChange} />
        <lable for="4">Pretty great</lable>
        <input type="radio" name="quality" value="5" onChange={handleChange} />
        <lable for="5">Perfect</lable>
      </Awrap>
      <Qwrap>How was the length of this product?</Qwrap>
      <Awrap>
        <input type="radio" name="length" value={1} onChange={handleChange} />
        <lable for="1">Runs Short</lable>
        <input type="radio" name="length" value={2} onChange={handleChange} />
        <lable for="2">Runs slightly short</lable>
        <input type="radio" name="length" value={3} onChange={handleChange} />
        <lable for="3">Perfect</lable>
        <input type="radio" name="length" value={4} onChange={handleChange} />
        <lable for="4">Runs slightly long</lable>
        <input type="radio" name="length" value={5} onChange={handleChange} />
        <lable for="5">Runs long</lable>
      </Awrap>
      <Qwrap>How was the fit of this product?</Qwrap>
      <Awrap>
        <input type="radio" name="fit" value={1} onChange={handleChange} />
        <lable for="1">Runs tight</lable>
        <input type="radio" name="fit" value={2} onChange={handleChange} />
        <lable for="2">Runs slightly tight</lable>
        <input type="radio" name="fit" value={3} onChange={handleChange} />
        <lable for="3">Prefect</lable>
        <input type="radio" name="fit" value={4} onChange={handleChange} />
        <lable for="4">Runs slightly long</lable>
        <input type="radio" name="fit" value={5} onChange={handleChange} />
        <lable for="5">Runs long</lable>
      </Awrap>
      <Qwrap>Summary</Qwrap>
      <Awrap>
        <textarea
          maxLength="60"
          rows="1"
          cols="60"
          name="summary"
          placeholder="Example: Best purchase ever!"
          value={state.summary}
          onChange={handleChange}
        ></textarea>
      </Awrap>
      <Qwrap>Please write a review</Qwrap>
      {/* <Awrap> */}
      <textarea
        minLength="50"
        maxLength="1000"
        name="body"
        rows="10"
        cols="50"
        value={state.body}
        placeholder="Why did you like the product or not?"
        onChange={handleChange}
      ></textarea>
      <small>
        {state.body.length >= 50
          ? "Mininum reached"
          : `Minimum required characters left : ${50 - state.body.length}`}
      </small>
      {/* </Awrap> */}
      <Qwrap>
        <label for="photos">Choose Photos:</label>
      </Qwrap>
      <input type="file" name="photos" accept="image/png, image/jpeg"></input>
      <Qwrap>What is your nickname?</Qwrap>
      {/* <Awrap> */}
      <textarea
        minLength="1"
        maxLength="60"
        rows="1"
        cols="60"
        name="name"
        placeholder="Example:jackson11"
        value={state.name}
        onChange={handleChange}
      ></textarea>
      <br></br>
      <small>
        For privacy reasons, do not use your full name or email address.
      </small>
      {/* </Awrap> */}
      <Qwrap>What is your Email?</Qwrap>
      <Awrap>
        <textarea
          minLength="1"
          maxLength="60"
          rows="1"
          cols="60"
          name="email"
          placeholder="Example:jackson11@email.com"
          value={state.email}
          onChange={handleChange}
        ></textarea>
      </Awrap>
      <small>For authentication reasons, you will not be emailed</small>
      <BC>
        <button
          onClick={() => {
            submitReview(state);
            closeModal(false);
          }}
        >
          Submit
        </button>

        <button onClick={() => closeModal(false)}> Close </button>
      </BC>
    </ModalWrap>
  );
};

export default AddReviewForm;
