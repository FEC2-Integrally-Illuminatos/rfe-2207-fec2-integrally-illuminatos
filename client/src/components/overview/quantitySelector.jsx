import React, { useState, useEffect } from 'react';
// import QuantityOption from './quantityOption.jsx';
import _ from 'underscore';


const QuantitySelector = (props) => {
  const [isEnabled, setEnabled] = useState(props.quantityEnabled);
  const [quantity, setQuantity] = useState(props.quantity);
  const [currentQuantity, setCurrentQuantity] = useState(0);
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
    setQuantity(props.quantity);
    setNumbers(() => {
      let tempArray = [];
      if (props.quantity > 15) {
        for (let i = 2; i <= 15; i++) {
          tempArray.push(i);
        }
      } else {
        for (let i = 2; i <= props.quantity; i++) {
          tempArray.push(i);
        }
      }
      return tempArray;
    })
  }, [props]);

  const handleOnChange = (e) => {
    setCurrentQuantity(e.target.value);
  };

  useEffect(() => {
    console.log(currentQuantity);
  }, [currentQuantity]);

  useEffect(() => {
    if (isEnabled) {
      setCurrentQuantity(1);
    }
  }, [isEnabled])

  if (!isEnabled) {
    return (
      <div>
        <label>
        <select  defaultValue={'default'}>
          <option value='default' disabled hidden>---</option>
        </select>
        </label>
      </div>
    );
  } else {
      return (
        <div>
        <label>
        <select defaultValue={currentQuantity} onChange={(e) => {handleOnChange(e)}}>
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