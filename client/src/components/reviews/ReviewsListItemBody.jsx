import React, { useState } from "react";
import ReviewsListItem from "./ReviewsListItem.jsx";
import styled from "styled-components";

var ReviewsListItemBody = function (props) {
  const { summary, body, recommend, response, helpfulness } = props;
  const [HCount, setHCount] = useState(helpfulness);
  const [Reported, setReported] = useState(false);

  const SummaryContainer = styled.div`
    background: #b1a6a4;
  `;
  const BodyContainer = styled.div`
    display: flex;
    overflow: hidden;
  `;

  function HelpfulHandler(e) {
    setHCount(HCount+1);
    console.log('Clicked')
  }
  function ReportHandler(e) {
    setReported(true);
    console.log('Review Reported')
  }

  //console.log(props)
  return (
    <div>
      <SummaryContainer>
        <h3>{summary.slice(0, 60)}</h3>
      </SummaryContainer>
      <BodyContainer>{body}</BodyContainer>
      {recommend ? <div>✅ I recommend this product!</div> : null}
      {response ? <div>Response from seller: {response}</div> : null}
      {/* <div>Helpful? 👍 ({helpfulness})</div> */}
      <br></br>
      <br></br>
      <div>
        Was this review helpful?👍👍 <span onClick={HelpfulHandler}>
          <u>YES</u><span>{HCount}</span></span>
          <span onClick={ReportHandler}>
          <u>{!Reported? "| Report Review" : "Review Reported"}</u></span>
      </div>

{/* <span onClick={ReportHandler}>
          <u>REPORT REVIEW</u></span> */}

    </div>
  );
};

export default ReviewsListItemBody;
