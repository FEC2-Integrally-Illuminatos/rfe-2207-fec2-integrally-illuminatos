import React, { useState, useEffect } from 'react';
import SizeOption from './sizeOption.jsx';
import _ from 'underscore';
import QuantitySelector from './quantitySelector.jsx';
import Select from 'react-select'



const SizeSelector = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [selectedSize, setSize] = useState('default');
  const [quantityEnabled, toggleQuantityDropdown] = useState(false);
  const [quantity, setQuantity] = useState(16);
  const [menuOpen, setMenuOpen] = useState(false);
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
    setStyle(props.style);
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
    if (selectedSize !== 'default') {
      toggleQuantityDropdown(true);
      setQuantity(_.findWhere(style.skus, {size: selectedSize}).quantity);
    };
  }, [selectedSize]);

  const handleChange = (e) => {
    setSize(e.value);
  };

  if (!style.skus.null) {
    return (
      <div>
      <Select defaultValue={selectedSize} options={options} placeholder={'Select Size'} defaultMenuIsOpen={menuOpen} onChange={(e) => {handleChange(e);}}/>
      <QuantitySelector quantity={quantity} selectedSize={selectedSize} quantityEnabled={quantityEnabled}/>
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