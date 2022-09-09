import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DetailDiv = styled.div`
  width: 100%;
  margin-top: 3%;
  font-family: 'Yeseva One', cursive;
  font-size: 13px;
`

const Detail = (props) => {


  if (!!props.detail.feature && !props.detail.value) {
    return (
      <DetailDiv>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{props.detail.feature}
      </DetailDiv>
    );
  } else if (props.detail.feature && props.detail.value) {
    return (
      <DetailDiv>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{props.detail.feature}:&nbsp;&nbsp;{props.detail.value}
      </DetailDiv>
    );
  } else {
    return (
      <div>
      </div>
    )
  }
}


export default Detail;