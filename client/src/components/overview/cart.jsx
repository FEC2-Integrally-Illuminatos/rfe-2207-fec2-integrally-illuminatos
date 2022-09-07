import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CartDiv = styled.div`
  width: 100%;
  margin-top: 3%
  margin-bottom: 3%;
  text-align: center;
`
const CartButton = styled.button`
  width: 60%;
  font-color: white;
  font-size: 16px;
  padding: 3% 10% 3% 10%;
  background-color: #E98074;
  border: none;
  margin-top: 5%;
  margin-bottom: 8%;
  font-family: 'Yeseva One', cursive;
  &:hover {
    background-color: #E24E0E;
  };
  &:active {
    transform: translateY(4px);
  };
`

const Cart = (props) => {
  const [isEnabled, setEnabled] = useState(props.isEnabled);
  const [selectedSize, setSelectedSize] = useState(props.selectedSize);
  const [currentQuantity, setCurrentQuantity] = useState(props.currentQuantity);
  const [currentSKU, setCurrentSKU] = useState(props.currentSKU);

  useEffect(() => {
    setEnabled(props.isEnabled);
    setSelectedSize(props.selectedSize);
    setCurrentQuantity(props.currentQuantity);
    setCurrentSKU(props.currentSKU);
  }, [props]);

  const handleClick = (e) => {
    axios.post('/cart', {sku_id: currentSKU, quantity: currentQuantity})
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOtherClick = (e) => {
      props.selectRef.current.focus();
      props.setAlert(true);
  };

  if (isEnabled) {
    return (
      <div>
        <CartDiv>
          <CartButton onClick={(e) => {handleClick(e);}}>Add to Cart</CartButton>
        </CartDiv>
      </div>
    );
  } else {
    return (
      <div>
        <CartDiv>
          <CartButton onClick={(e) => {handleOtherClick(e);}}>Add to Cart</CartButton>
        </CartDiv>
      </div>
    );
  }
}


export default Cart;