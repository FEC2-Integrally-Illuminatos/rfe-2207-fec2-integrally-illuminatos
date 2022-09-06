//should link ReviewsList, AddPost,
// import ReviewContainer from "/Users/andrewicho/Desktop/HackReactor/Senior/frontendcapstone/rfe-2207-fec2-integrally-illuminatos/client/src/assets/Container.styled.js";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import sampleReview from "./sampleReview.js";
import sampleMetaData from "./sampleMetaData.js";
import ReviewsList from "./ReviewsList.jsx";
import Rating from "./Rating.jsx";
import RatingProdInfo from "./RatingProdInfo.jsx";
import RatingHeader from "./RatingHeader.jsx";
import AddReviewForm from "./AddReviewForm.jsx";
const axios = require("axios");
var Reviews = function () {
  // Declare a new state variable, which we'll call "count"
  const [openModal, setOpenModal] = useState(false);
  const ratings = ["*****", "****", "***", "**", "*"];
  const [Product, setProduct] = useState(37331);
  const [Sorted, setSorted] = useState('');
  const [Reviews, setReviews] = useState([]);

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
  function SubmitReview(reviewData) {
    const {
      rating,
      recommend,
      size,
      width,
      comfort,
      quality,
      length,
      fit,
      summary,
      body,
      photos,
      name,
      email
    } = reviewData;
    const params = {
      product_id: 37331,
      rating: rating,
      recommend: recommend,
      summary: summary,
      body: body,
      photos: photos,
      name: name,
      email: email,
      characteristics: {
        Size: { id: 14, value: size },
        Width: { id: 15, value: width },
        Comfort: { id: 16, value: comfort },
        Quality: { id: 17, value: quality },
        Length: { id: 17, value: length },
        Fit: { id: 17, value: fit },
      },
    };
    return axios
      .post("/reviews", { params })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //sort options are "newest", "helpful", or "relevant"
  function GetReviews(
    product_id = 37331,
    sort = "newest",
    count = 20,
    page = 1
  ) {
    const params = {
      product_id: product_id,
      sort: sort,
      count: count,
      page: page,
    };
    return axios
      .get("/reviews", { params })
      .then((result) => {
        console.log(result);
        setReviews(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    GetReviews();
  }, []);

  //RENDERING
  return (
    <div id="gohere">
      <div className="ReviewsList">
        <form>
          <label>{sampleReview.count} Reviews: Select By:</label>
          <select>
            {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select */}
            <option value="helpful" >Helpful </option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
          <button onClick={()=>GetReviews(37331, Sorted, 20, 1)}>SUBMIT</button>
          <button onClick={ResetFilter}>RESET REVIEW FILTER</button>
          <p></p>
        </form>
        <ReviewsList Product={Product} ReviewsToDisplay={ReviewsToDisplay} />
        <button onClick={AddTwoReview}>More Reviews</button>

        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add a Review
        </button>
        {openModal && (
          <AddReviewForm
            closeModal={setOpenModal}
            submitReview={SubmitReview}
          />
        )}
      </div>
      <div>
        <RatingHeader metadata={sampleMetaData} />
      </div>
      <div>
        <Rating FilterFunc={FilterByStars} />
      </div>
      <br></br>
      <div>
        <RatingProdInfo metadata={sampleMetaData} />
      </div>
      {/* <div>
        <AddReviewForm />
      </div> */}
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
