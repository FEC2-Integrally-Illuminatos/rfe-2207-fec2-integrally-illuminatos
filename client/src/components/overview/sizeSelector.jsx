import React, { useState, useEffect, useRef } from 'react';
import SizeOption from './sizeOption.jsx';
import _ from 'underscore';
import QuantitySelector from './quantitySelector.jsx';
import Select from 'react-select'


const SizeSelector = (props) => {
  const selectRef = useRef();
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [selectedSize, setSize] = useState('');
  const [quantityEnabled, toggleQuantityDropdown] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSKU, setCurrentSKU] = useState('');
  const [options, setOptions] = useState(() => {
    let temp = [];
    _.each(props.style.skus, (styleID) => {
      let tempObj = {
        value: styleID.size,
        label: styleID.size
      };
      temp.push(tempObj);
    });
    return temp;
  });

  useEffect(() => {
    setProduct(props.product);
    setQuantity(0);
    setMenuOpen(false);
    setCurrentSKU('');
    toggleQuantityDropdown(false);
    setStyle(props.style);
    setSize('');
    setOptions(() => {
      let temp = [];
      _.each(props.style.skus, (styleID) => {
        let tempObj = {
          value: styleID.size,
          label: styleID.size
        };
        temp.push(tempObj);
      });
      return temp;
    });
  }, [props]);


  useEffect(() => {
    if (selectedSize !== '') {
      toggleQuantityDropdown(true);
      setQuantity(_.findWhere(style.skus, {size: selectedSize.value}).quantity);
      setCurrentSKU(_.findKey(style.skus, (sku) => {
          return (sku.size === selectedSize.value);
        })
      )
    };
  }, [selectedSize]);

  const handleChange = (e) => {
    setSize({value: e.value, label: e.value});
    setMenuOpen(false);
  };

  const handleOnFocus = (e) => {
    setMenuOpen(true);
  };


  if (!style.skus.null) {
    return (
      <div>
        <Select value={selectedSize} ref={selectRef} openMenuOnFocus={true} isSearchable={false} options={options} placeholder={'Select Size'}  onChange={(e) => {handleChange(e);}}/>
        <QuantitySelector currentSKU={currentSKU} selectRef={selectRef} setMenuOpen={setMenuOpen} style={style} quantity={quantity} selectedSize={selectedSize.value} quantityEnabled={quantityEnabled}/>
      </div>
  );
  } else {
    return (
      <div>
        <Select placeholder='OUT OF STOCK' isDisabled={true}/>
    </div>
  );
  }
}


export default SizeSelector;