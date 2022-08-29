import React, { useState, useEffect } from 'react';
import QuantityOption from './quantityOption.jsx';
import _ from 'underscore';


const QuantitySelector = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [selectedSize, setSize] = useState('default');

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
  }, [props]);

  useEffect(() => {
    console.log(style);
  }, [style]);

  return (
    <div>
      <label>
      <select defaultValue={selectedSize} onChange={() => {}}>
        <option value='default' disabled hidden>-</option>
        {_.map(style.skus, (styleID, key) => {
          return <SizeOption size={styleID.size} quantity={styleID.quantity} key={key}/>
        })}
      </select>
      </label>
    </div>
  );
}


export default QuantitySelector;