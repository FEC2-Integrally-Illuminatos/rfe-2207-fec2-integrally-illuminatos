import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PriceDiv = styled.div`
  font-size: 16px;
  margin-top: 3%;
  margin-bottom: 3%;
  font-family: 'Yeseva One', cursive;
`

const SaleDiv = styled.div`
  font-size: 16px;
  text-decoration: line-through;
  color: red;
  margin-top: 3%;
  margin-bottom: 3%;
  font-family: 'Yeseva One', cursive;
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26%;
`

const Price = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);

  if (style.sale_price === null || style.sale_price === undefined) {
    return (
      <PriceContainer>
        <PriceDiv>${style.original_price}</PriceDiv>
      </PriceContainer>
    )
  } else {
    return (
      <PriceContainer>
        <PriceDiv>${style.sale_price}</PriceDiv>
        <SaleDiv>${style.original_price}</SaleDiv>
      </PriceContainer>
    )
  };
}


export default Price;