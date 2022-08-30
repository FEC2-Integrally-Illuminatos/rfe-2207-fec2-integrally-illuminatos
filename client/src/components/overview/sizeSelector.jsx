import React, { useState, useEffect } from 'react';
import SizeOption from './sizeOption.jsx';
import _ from 'underscore';
import QuantitySelector from './quantitySelector.jsx';



const SizeSelector = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [selectedSize, setSize] = useState('default');
  const [quantityEnabled, toggleQuantityDropdown] = useState(false);
  const [quantity, setQuantity] = useState(16);

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
  }, [props]);


  useEffect(() => {
    if (selectedSize !== 'default') {
      toggleQuantityDropdown(true);
      setQuantity(_.findWhere(style.skus, {size: selectedSize}).quantity);
      console.log(selectedSize);
    };
  }, [selectedSize]);

  const handleChange = (e) => {
    setSize(e.target.value);
  };


  return (
    <div>
      <label>
      <select defaultValue={selectedSize} onChange={(e) => {handleChange(e);}}>
        <option value='default' disabled hidden>Select Size</option>
        {_.map(style.skus, (styleID, key) => {
          return <SizeOption size={styleID.size} quantity={styleID.quantity} key={key}/>
        })}
      </select>
      </label>
      <QuantitySelector quantity={quantity} selectedSize={selectedSize} quantityEnabled={quantityEnabled}/>
    </div>
  );
}


export default SizeSelector;