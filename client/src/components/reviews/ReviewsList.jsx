import React, { useState } from "react";
import ReviewsListItem from "./ReviewsListItem.jsx";
import styled from "styled-components";

const ReviewCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
var ReviewsList = function (props) {

  const { Product, ReviewsToDisplay } = props;
  // const [DisplayCount, setDisplayCount] = useState(
  //   props.Reviews.length > 1 ? 2 : props.Reviews.length
  // );
  // const [ToDisplay, setToDisplay] = useState(Reviews.slice(0, DisplayCount));

  return ReviewsToDisplay.map((DisplayItem) => (
    <ReviewCardContainer>
      <ReviewsListItem
        body={DisplayItem.body}
        date={DisplayItem.date}
        helpfulness={DisplayItem.helpfulness}
        photos={DisplayItem.photos}
        rating={DisplayItem.rating}
        recommend={DisplayItem.recommend}
        response={DisplayItem.response}
        //review_id={DisplayItem.review_id}
        reviewer_name={DisplayItem.reviewer_name}
        summary={DisplayItem.summary}
        key={DisplayItem.review_id}
      />
    </ReviewCardContainer>
  ));
};

export default ReviewsList;

//sample data
// body: "Consectetur voluptate sit cillum in occaecat sit. Commodo ipsum ad adipisicing adipisicing. Cupidatat non esse elit proident duis incididunt laborum. Laboris eiusmod in pariatur. Excepteur sint occaecat ullamco cillum ea minim deserunt. Officia labore id sunt consectetur amet eiusmod. Mollit do nisi ipsum aute. Laborum eiusmod occaecat sunt enim enim laborum."
// date: "2021-12-30T00:00:00.000Z"
// helpfulness: 27
// photos: (5) [{…}, {…}, {…}, {…}, {…}]
// rating: 5
// recommend: false
// response: null
// review_id: 1115408
// reviewer_name: "siekechu"
// summary: "I love this product - you need to buy this ASAP"
