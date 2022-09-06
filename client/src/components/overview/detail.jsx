import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark'
import styled from 'styled-components';

const DetailDiv = styled.div`
  width: 100%;
  margin-top: 3%;
  font-family: 'Yeseva One', cursive;
  font-size: 13px;
`

const Detail = (props) => {
  const [detail, setDetail] = useState(props.detail);

  useEffect(() => {
    setDetail(props.detail);
  }, []);

  if (!!detail.feature && !detail.value) {
    return (
      <DetailDiv>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{detail.feature}
      </DetailDiv>
    );
  } else if (detail.feature && detail.value) {
    return (
      <DetailDiv>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{detail.feature}:&nbsp;&nbsp;{detail.value}
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