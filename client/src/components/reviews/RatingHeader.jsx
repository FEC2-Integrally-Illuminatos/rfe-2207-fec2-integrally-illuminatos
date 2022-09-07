import React from "react";
import styled from "styled-components";
import SR from "./SR.jsx"
var RatingHeader = function (props) {
  const { metadata } = props;
  //console.log(metadata);
  const { characteristics, ratings, recommended } = metadata;
  const { Comfort, Fit, Length, Quality } = characteristics;

  let totalCount = Number(recommended.false) + Number(recommended.true);
  let recCount = Number(recommended.true);
  let totalScore =
    Number(ratings[1]) * 1 +
    Number(ratings[2]) * 2 +
    Number(ratings[3]) * 3 +
    Number(ratings[4]) * 4 +
    Number(ratings[5]) * 5;
  let avg = Math.round((totalScore / totalCount) * 10) / 10;
  //console.log(avg);
  return (
    <div>
      RATING BREAKDOWN
      <div>Average Rating: {avg}</div>
      <div>Total Ratings Count: {totalCount}</div>
      <h2><SR rating={avg} totalCount={totalCount}/></h2>
      <div>
        {Math.round((recCount / totalCount) * 100)}% of the reviewers recommend
        this product.
      </div>


    </div>
  );
};

export default RatingHeader;
