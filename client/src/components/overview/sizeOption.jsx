import React, { useState, useEffect } from 'react';


const SizeOption = (props) => {
  const [size, setSize] = useState(props.size);
  const [quantity, setQuantity] = useState(props.quantity);

  useEffect(() => {
    setSize(props.size);
    setQuantity(props.quantity);
  }, [props]);


  if (quantity > 0) {
    return (
      <option value={size}>{size}</option>
      );
  } else {
    return (
      <option value={'OUT OF STOCK'}>OUT OF STOCK</option>
      );
  }
}


export default SizeOption;