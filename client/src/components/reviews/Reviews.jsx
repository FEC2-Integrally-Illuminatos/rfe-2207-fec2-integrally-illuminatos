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
// import '../../../assets/stylesRelatedProducts.css';
const axios = require("axios");

const GlobalReviewWrapper = styled.div`
  display: flex;
  background-color: #d8cfd0;
  padding: 3% 2% 3% 2%;
`;

const ReviewWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 20px;
  flex-direction: column;
  background-color: #d9d9d9;
`;

const ProductRatingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 30px;
  font-family: Karla;
`;
const Button2Container = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  font-family: Karla;
  font-size: 30px
`;
const ReviewDisplayContainer = styled.div`
  max-height 50hv;
  autoflow-y: auto;
`;

var Reviews = function (props) {
  // console.log("props passed to review", props);
  const ProductID = props.product.id;
  // Declare a new state variable, which we'll call "count"
  const [openModal, setOpenModal] = useState(false);
  const ratings = ["*****", "****", "***", "**", "*"];
  const [Product, setProduct] = useState(ProductID);
  //37331 prodID
  const [Sorted, setSorted] = useState("");
  const [Reviews, setReviews] = useState([]);
  const [MetaData, setMetaData] = useState(sampleMetaData);

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
    // console.log('toAdd is here', toAdd)
    if (toAdd.length === 0) {
      // console.log("ran out of reviews to add");
      return;
    }
    setReviewsToDisplay((rev) => rev.concat(toAdd));
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
      email,
    } = reviewData;
    const params = {
      product_id: ProductID,
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
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //sort options are "newest", "helpful", or "relevant"
  function GetReviews(
    product_id = ProductID,
    sort = "newest",
    count = 100,
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
        console.log('teck says console log this', result.data.results);
        setReviews(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getMetaData(product_id = ProductID) {
    const params = { product_id: product_id };
    return axios
      .get("/reviews/meta", { params })
      .then((result) => {
        // console.log("metadata API call", result.data);
        setMetaData(result.data);
        // console.log('Kempkes ', MetaData)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect(() => {
  //   GetReviews().then(()=>{
  //     // console.log('reviews is here', Reviews)
  //     });
  // }, []);

  useEffect(() => {
    setReviewsToDisplay([]);
    GetReviews();
    getMetaData();
  }, [props]);

  useEffect(() => {
    AddTwoReview();
  }, [Reviews]);

  useEffect(() => {
    getMetaData(ProductID);
  }, [props]);
  //RENDERING
  return (
    <GlobalReviewWrapper id="gohere">
      <ProductRatingContainer>
        <h1>Reviews and Rating</h1>
        <div>
          <RatingHeader metadata={MetaData} />
        </div>
        <div>
          <Rating FilterFunc={FilterByStars} metadata={MetaData} />
        </div>
        <br></br>
        <div>
          <RatingProdInfo metadata={MetaData} />
        </div>
      </ProductRatingContainer>
      <ReviewWrapper>
        <form>
          <Button2Container>
          <label>{ReviewsList.count} Reviews: Select By:</label>
          <select
            onChange={(e) => {
              setSorted(e.target.value);
              // console.log(e.target.value);
              setReviewsToDisplay([]);
              GetReviews(ProductID, e.target.value, 20, 1);
            }}
          >
            <option value="helpful">Helpful </option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
          </Button2Container>
        </form>
        <ReviewsList Product={Product} ReviewsToDisplay={ReviewsToDisplay} />
        <ButtonContainer>
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
        </ButtonContainer>
      </ReviewWrapper>
    </GlobalReviewWrapper>
  );
};

export default Reviews;
