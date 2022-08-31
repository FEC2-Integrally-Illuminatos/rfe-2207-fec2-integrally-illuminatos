import React, { useState, useEffect } from 'react';
// import QuantityOption from './quantityOption.jsx';
import _ from 'underscore';
import Select from 'react-select'



const QuantitySelector = (props) => {
  const [isEnabled, setEnabled] = useState(props.quantityEnabled);
  const [selectedSize, setSelectedSize] = useState(props.selectedSize);
  const [quantity, setQuantity] = useState(props.quantity);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [numbers, setNumbers] = useState(() => {
    let tempArray = [];
    if (props.quantity > 15) {
      for (let i = 1; i <= 15; i++) {
        tempArray.push({value: i, label: i});
      };
    } else {
      for (let i = 1; i <= props.quantity; i++) {
        tempArray.push({
          value: i,
          label: i
        });
      };
    };
    return tempArray;
  });

  useEffect(() => {
    setEnabled(props.quantityEnabled);
    setSelectedSize(props.selectedSize);
    setQuantity(props.quantity);
    setNumbers(() => {
      let tempArray = [];
      if (props.quantity > 15) {
        for (let i = 1; i <= 15; i++) {
          tempArray.push({
            value: i,
            label: i
          });
        };
      } else {
        for (let i = 1; i <= props.quantity; i++) {
          tempArray.push({
            value: i,
            label: i
          });
        };
      };
      return tempArray;
    })
  }, [props]);

  const handleOnChange = (e) => {
    setCurrentQuantity(e.value);
  };

  useEffect(() => {
    if (isEnabled) {
      setCurrentQuantity(1);
    }
  }, [selectedSize])


  if (!isEnabled) {
    return (
      <div>
        <Select placeholder='-' isDisabled={true}/>
      </div>
    );
  } else {
      return (
        <div>
        <Select defaultValue={{value: 1, label: 1}} value={{value: currentQuantity, label: currentQuantity}} options={numbers} onChange={(e) => {handleOnChange(e)}}/>
      </div>
    );
  }
}


export default QuantitySelector;