import React from "react";
import ReviewsListItem from "./ReviewsListItem.jsx";
import styled from "styled-components";
var ReviewsListItemBody = function (props) {
  const {summary, body, recommend, response, helpfulness} = props;

  //console.log(props)
  return (
    <div>
      <h3>{summary}</h3>
      <div>{body}</div>
      {recommend? <div>✅ I recommend this product!✅</div>: null}
      {response? <div>{response}</div> : null}
      <div>Helpful? 👍 ({helpfulness})</div>
      <br></br>
      <br></br>

    </div>
  );
};

export default ReviewsListItemBody;
