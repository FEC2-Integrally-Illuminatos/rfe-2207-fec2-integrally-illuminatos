import React from "react";
import styled from "styled-components";
import ReviewsListItem from "./ReviewsListItem.jsx";
var ReviewsListItemStars = function (props) {
  //console.log("stars prop ",props)
  const stars = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
  return (
    <div>{stars[props.rating-1]}</div>
  );
};

// const ReviewContainer = styled.div`
//   position: absolute;
//   width: 80%;
//   right: 100px;
//   max-width: 50%;
//   border: 3px solid red;
// `;

export default ReviewsListItemStars;

