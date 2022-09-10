import React from "react";
import styled from "styled-components";
import SR from "./SR.jsx"
const RatContainer = styled.div`
  display: flex;
  justify-content: start;
  font-family: Karla;
  font-size: 20px
`;

var RatingHeader = function (props) {
  const { metadata } = props;
  // console.log('props from rating header', props);
  const { characteristics, ratings, recommended } = metadata;
  const { Comfort, Fit, Length, Quality } = characteristics;

  let totalCount = Number(recommended.false) + Number(recommended.true);
  let recCount = Number(recommended.true);
  let rating1 = ratings[1] || 0;
  let rating2 = ratings[2] || 0;
  let rating3 = ratings[3] || 0;
  let rating4 = ratings[4] || 0;
  let rating5 = ratings[5] || 0;
  let totalScore =
    Number(rating1) * 1 +
    Number(rating2) * 2 +
    Number(rating3) * 3 +
    Number(rating4) * 4 +
    Number(rating5) * 5;
  let avg = Math.round((totalScore / totalCount) * 10) / 10;
  //console.log(avg);
  return (
    <div>
      <RatContainer>Average Rating: {avg}</RatContainer>
      <RatContainer>Total Ratings Count: {totalCount}</RatContainer>
      <h2><SR rating={avg} totalCount={totalCount}/></h2>
      <RatContainer>
        {Math.round((recCount / totalCount) * 100)}% of the reviewers recommend
        this product.
      </RatContainer>


    </div>
  );
};

export default RatingHeader;
