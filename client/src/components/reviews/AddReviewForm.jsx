//to be built
import React, { useState } from "react";
import styled from "styled-components";
const axios = require("axios");

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
    email: ""
  });


  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  return (
    <div>
      {" "}
      <h1>Write your review</h1>
      <button onClick={() => closeModal(false)}> X </button>
      <form>
        <label>
          RATING THAT NEEDS TO BE A STAR
          <input
            type="range"
            name="rating"
            min="1"
            max="5"
            value={state.rating}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <div>
          <div>Do you recommend this product?</div>
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
        </div>
        ------
        <br></br>
        <div>
          <div>Was this product true to its size?</div>
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
        </div>
        <div>
          <div>Width</div>
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
        </div>
        <div>
          <div>Comfort</div>
          <input
            type="radio"
            name="comfort"
            value="1"
            onChange={handleChange}
          />
          <lable for="1">Uncomfortable</lable>
          <input
            type="radio"
            name="comfort"
            value="2"
            onChange={handleChange}
          />
          <lable for="2">Slightly uncomfortable</lable>
          <input
            type="radio"
            name="comfort"
            value="3"
            onChange={handleChange}
          />
          <lable for="3">OK</lable>
          <input
            type="radio"
            name="comfort"
            value="4"
            onChange={handleChange}
          />
          <lable for="4">Comfortable</lable>
          <input
            type="radio"
            name="comfort"
            value="5"
            onChange={handleChange}
          />
          <lable for="5">Perfect</lable>
        </div>
        <div>
          <div>Quality</div>
          <input
            type="radio"
            name="quality"
            value="1"
            onChange={handleChange}
          />
          <lable for="1">Poor</lable>
          <input
            type="radio"
            name="quality"
            value="2"
            onChange={handleChange}
          />
          <lable for="2">Below Average</lable>
          <input
            type="radio"
            name="quality"
            value="3"
            onChange={handleChange}
          />
          <lable for="3">What I expected</lable>
          <input
            type="radio"
            name="quality"
            value="4"
            onChange={handleChange}
          />
          <lable for="4">Pretty great</lable>
          <input
            type="radio"
            name="quality"
            value="5"
            onChange={handleChange}
          />
          <lable for="5">Perfect</lable>
        </div>
        <div>
          <div>Length</div>
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
        </div>
        <div>
          <div>Fit</div>
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
        </div>
        <div>
          <label>
            Summary
            <textarea
              maxlength="60"
              rows="1"
              cols="60"
              name="summary"
              placeholder="Example: Best purchase ever!"
              value={state.summary}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Please write a review
            <br></br>
            <textarea
              minLength="50"
              maxlength="1000"
              name="body"
              rows="10"
              cols="50"
              value={state.body}
              placeholder="Why did you like the product or not?"
              onChange={handleChange}
            ></textarea>
            {state.body.length >=50? (<div>Mininum reached</div>): (<div>Minimum required characters left : {50-state.body.length}</div>)}
          </label>
        </div>
        <div>
          <label for="photos">Choose Photos:
          </label>
          <input type="file"
          name="photos"
          accept="image/png, image/jpeg"></input>
{/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file */}
        </div>
        <div>
        <label>
            What is your nickname?
            <textarea
              minlength="1"
              maxlength="60"
              rows="1"
              cols="60"
              name="name"
              placeholder="Example:jackson11"
              value={state.name}
              onChange={handleChange}
            ></textarea>
                        <div>For privacy reasons, do not use your full name or email address.</div>
          </label>
        </div>
        <div>
        <label>
            What is your Email?
            <textarea
              minlength="1"
              maxlength="60"
              rows="1"
              cols="60"
              name="email"
              placeholder="Example:jackson11@email.com"
              value={state.email}
              onChange={handleChange}
            ></textarea>
            <span>For authentication reasons, you will not be emailed</span>
          </label>
        </div>
      </form>
      <button onClick={()=>submitReview(state)}>Submit</button>
    </div>
  );
};

export default AddReviewForm;
