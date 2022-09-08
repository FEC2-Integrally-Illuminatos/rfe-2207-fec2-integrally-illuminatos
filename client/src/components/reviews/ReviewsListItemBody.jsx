import React from "react";
import ReviewsListItem from "./ReviewsListItem.jsx";
import styled from "styled-components";
var ReviewsListItemBody = function (props) {
  const { summary, body, recommend, response, helpfulness } = props;
  const SummaryContainer = styled.div`
    background: #b1a6a4;
  `;

  //console.log(props)
  return (
    <div>
      <SummaryContainer>
        <h3>{summary.slice(0, 60)}</h3>
      </SummaryContainer>
      <div>{body}</div>
      {recommend ? <div>✅ I recommend this product!</div> : null}
      {response ? <div>Response from seller: {response}</div> : null}
      <div>Helpful? 👍 ({helpfulness})</div>
      <br></br>
      <br></br>
      <div>Was this review helpful?</div>
    </div>
  );
};

export default ReviewsListItemBody;
