import React, { useState, useEffect } from 'react';
// import QuantityOption from './quantityOption.jsx';
import _ from 'underscore';


const QuantitySelector = (props) => {
  const [isEnabled, setEnabled] = useState(props.quantityEnabled);
  const [selectedSize, setSize] = useState(props.selectedSize);
  const [quantity, setQuantity] = useState(props.quantity);
  const [numbers, setNumbers] = useState(() => {
    let tempArray = [];
    if (props.quantity > 15) {
      for (let i = 1; i <= 15; i++) {
        tempArray.push(i);
      }
    } else {
      for (let i = 1; i <= props.quantity; i++) {
        tempArray.push(i);
      }
    }
    return tempArray;
  })

  useEffect(() => {
    setEnabled(props.quantityEnabled);
    setSize(props.selectedSize);
    setQuantity(props.quantity);
    setNumbers(() => {
      let tempArray = [];
      if (props.quantity > 15) {
        for (let i = 1; i <= 15; i++) {
          tempArray.push(i);
        }
      } else {
        for (let i = 1; i <= props.quantity; i++) {
          tempArray.push(i);
        }
      }
      return tempArray;
    })
  }, [props]);


  if (!isEnabled) {
    return (
      <div>
        <label>
        <select  defaultValue={selectedSize}>
          <option value='default' disabled hidden >---</option>
        </select>
        </label>
      </div>
    );
  } else {
      return (
        <div>
        <label>
        <select defaultValue={selectedSize} onChange={() => {}}>
          <option value={1}>1</option>
          {_.map(numbers, (number, key) => {
            return <option value={number} key={key}>{number}</option>
          })}
        </select>
        </label>
      </div>
    );
  }
}


export default QuantitySelector;