import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
  };

  if (isEnabled) {
    return (
      <div>
        <div>
          <button onClick={(e) => {handleClick(e);}}>Add to Cart</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        COMPONENT FOR MESSAGE
        <div>
          <button onClick={(e) => {handleOtherClick(e);}}>Add to Cart</button>
        </div>
      </div>
    );
  }
}


export default Cart;