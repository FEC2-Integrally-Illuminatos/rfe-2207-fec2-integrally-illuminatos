//should link ReviewsList, AddPost,
// import ReviewContainer from "/Users/andrewicho/Desktop/HackReactor/Senior/frontendcapstone/rfe-2207-fec2-integrally-illuminatos/client/src/assets/Container.styled.js";
import styled from "styled-components";

import React, { useState } from "react";
import sampleReview from "./sampleReview.js";
import sampleMetaData from "./sampleMetaData.js";
import ReviewsList from "./ReviewsList.jsx";
import Rating from "./Rating.jsx";
import RatingProdInfo from "./RatingProdInfo.jsx";
import RatingHeader from "./RatingHeader.jsx";
import AddReviewForm from "./AddReviewForm.jsx";
var Reviews = function () {
  // Declare a new state variable, which we'll call "count"
  const ratings = ["*****", "****", "***", "**", "*"];
  const [Product, setProduct] = useState(sampleReview.product);
  const [Reviews, setReviews] = useState(sampleReview.results);
  // const [ResetReviews, setResetReviews] = useState(sampleReview.results);
  const [StarCount, setStarCount] = useState(0);
  const [DisplayIndex, setDisplayIndex] = useState(
    2
    //Reviews.length > 1 ? 2 : Reviews.length
  );
  const [ReviewsToDisplay, setReviewsToDisplay] = useState(Reviews.slice(0, 2));

  //Functions
  function AddTwoReview() {
    //console.log(ReviewsToDisplay)
    let totalAvail = Reviews.length;
    let curCount = ReviewsToDisplay.length;
    let toAdd = Reviews.slice(curCount, curCount + 2);
    if (toAdd.length === 0) {
      console.log("ran out of reviews to add");
      return;
    }
    setReviewsToDisplay([...ReviewsToDisplay, ...toAdd]);
    //console.log(ReviewsToDisplay);
  }

  function FilterByStars(starNum) {
    const StarFilter = Reviews.filter((item) => item.rating === starNum);
    // setReviews(StarFilter)
    setReviewsToDisplay(StarFilter);
  }
  function ResetFilter() {
    const StarFilter = Reviews.filter((item) => item.rating === starNum);
    setReviews(ResetReviews);
  }
  //console.log("sample data from Reviews ", sampleReview);

  //RENDERING
  return (
    <div id="gohere">
      <ReviewContainer>
        <div className="ReviewsList">
          <form>
            <label>{sampleReview.count} Reviews: Select By:</label>
            <select>
              {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select */}
              <option value="Rating">Rating</option>
              <option value="Helpfulness">Rating</option>
              <option value="Average Review">Average Review</option>
              <option value="Highest ">Highest Reviews</option>
            </select>
            <button>SUBMIT</button>
            <button onClick={ResetFilter}>RESET REVIEW FILTER</button>
            <p></p>
          </form>
          <ReviewsList Product={Product} ReviewsToDisplay={ReviewsToDisplay} />
          <button onClick={AddTwoReview}>More Reviews</button>
          <button>Add a Review TEST</button>
        </div>
      </ReviewContainer>
      <RatingContainer>
        <div>
          <RatingHeader metadata={sampleMetaData} />
        </div>
        <div>
          <Rating FilterFunc={FilterByStars} />
        </div>
        <br></br>
        <div>
          <RatingProdInfo metadata={sampleMetaData} />
          <AddReviewForm />
        </div>
      </RatingContainer>
      <div>

      </div>
    </div>
  );
};

const ReviewContainer = styled.div`
  position: absolute;
  width: 80%;
  right: 100px;
  max-width: 50%;
  border: 3px solid red;
`;

const RatingContainer = styled.div`
  position: absolute;
  width: 30%;
  left: 20px;
  max-width: 50%;
  border: 3px solid black;
`;
export default Reviews;
