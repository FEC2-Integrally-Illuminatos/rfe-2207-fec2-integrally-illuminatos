import React, { useState, useEffect } from 'react';
// import QuantityOption from './quantityOption.jsx';
import _ from 'underscore';
import Select from 'react-select'
import Cart from './cart.jsx';



const QuantitySelector = (props) => {
  const [style, setStyle] = useState(props.style);
  const [isEnabled, setEnabled] = useState(props.quantityEnabled);
  const [selectedSize, setSelectedSize] = useState(props.selectedSize);
  const [quantity, setQuantity] = useState(props.quantity);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentSKU, setCurrentSKU] = useState(props.currentSKU);
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
    setStyle(props.style);
    setEnabled(props.quantityEnabled);
    setSelectedSize(props.selectedSize);
    setQuantity(props.quantity);
    setCurrentQuantity(1);
    setCurrentSKU(props.currentSKU);
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
        <div>
          <Select value={''} placeholder={'-'} isDisabled={true}/>
        </div>
        <div>
          <Cart setAlert={props.setAlert} isEnabled={isEnabled} selectRef={props.selectRef} setMenuOpen={props.setMenuOpen} currentSKU={currentSKU} currentQuantity={currentQuantity} selectedSize={selectedSize}/>
        </div>
      </div>
    );
  } else {
      return (
        <div>
          <div>
            <Select isSearchable={false} value={{value: currentQuantity, label: currentQuantity}} options={numbers} onChange={(e) => {handleOnChange(e)}}/>
          </div>
          <div>
            <Cart setAlert={props.setAlert} isEnabled={isEnabled} selectRef={props.selectRef} setMenuOpen={props.setMenuOpen} currentSKU={currentSKU} currentQuantity={currentQuantity} selectedSize={selectedSize}/>
          </div>
        </div>
    );
  }
}


export default QuantitySelector;