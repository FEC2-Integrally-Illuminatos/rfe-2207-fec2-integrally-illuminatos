import React, { useState, useEffect } from 'react';


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


  if (isEnabled) {
    return (
      <div>
        Current Size: {selectedSize} Current Quantity: {currentQuantity} Current SKU: {currentSKU}
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        I'm not Enabled!
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}


export default Cart;