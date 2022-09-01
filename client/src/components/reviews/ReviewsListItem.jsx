import React from "react";
import ReviewsList from "./ReviewsList.jsx";
import styled from "styled-components";
import ReviewsListItemStars from "./ReviewsListItemStars.jsx";
import ReviewsListItemNameDate from "./ReviewsListItemNameDate.jsx";
import ReviewsListItemBody from "./ReviewsListItemBody.jsx";

var ReviewsListItem = function (props) {
  const {
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    response,
    review_id,
    reviewer_name,
    summary,
  } = props;
  return (
    <div>
      <span>
        <StarContainer>
          <ReviewsListItemStars rating={rating} />
        </StarContainer>
      </span>

      <span>
        <NameDateContainer>
          <ReviewsListItemNameDate reviewer_name={reviewer_name} date={date} />
        </NameDateContainer>
      </span>
      <br></br>
      <div>
        <ReviewsListItemBody
          summary={summary}
          body={body}
          recommend={recommend}
          response={response}
          helpfulness={helpfulness}
        />
      </div>
    </div>
  );
};

export default ReviewsListItem;

const NameDateContainer = styled.span`
  position: absolute;
  display: flex;
  width: 80%;
  right: -40%;
`;
const StarContainer = styled.span`
  position: absolute;
  display: flex;
  width: 80%;
  left: 40%%;
`;

// return (
//   <div>
//     <span>Reviewed by {reviewer_name} on {date}</span>
//     <div>
//       <h2>{summary}</h2>
//       <span>Stars Count   {rating}</span>
//       <div>{body}</div>
//     </div>

//     <div>
//       <span>Response: {response}</span>
//       <span>Helpful? Yes {helpfulness}</span>
//     </div>
//     <div>_________________________________________________</div>
//   </div>
// );
