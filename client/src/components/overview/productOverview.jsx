import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SloganDiv = styled.div`
  width: 100%;
  margin-top: 8%
  margin-bottom: 10%;
  font-family: 'Yeseva One', cursive;
  font-size: 22px;
`
const DescriptionP = styled.p`
  width: 100%;
  margin-top: 3%;
  font-family: 'Yeseva One', cursive;
  font-size: 13px;
  margin-bottom: 10%
`

const ProductOverview = (props) => {

  if (props.product.description.length > 0) {
    return (
      <div>
        <SloganDiv>
          {props.product.slogan}
        </SloganDiv>
        <DescriptionP>
          {props.product.description}
        </DescriptionP>
      </div>
    )
  } else {
    return (
      <div>
        <SloganDiv>
          {props.product.slogan}
        </SloganDiv>
      </div>
    )
  };
}


export default ProductOverview;