import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PriceDiv = styled.div`
  font-size: 16px;
  margin-top: 3%;
  margin-bottom: 3%;
  font-family: 'Yeseva One', cursive;
`

const Price = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);

  if (style.sale_price === null || style.sale_price === undefined) {
    return (
      <div>
        <PriceDiv>{style.original_price}</PriceDiv>
      </div>
    )
  } else {
    return (
      <div>
        <PriceDiv>{style.sale_price}  {style.original_price}</PriceDiv>
      </div>
    )
  };
}


export default Price;