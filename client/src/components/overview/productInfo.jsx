import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import Price from './price.jsx';
import StarRating from './starRating.jsx';


const ProductInfo = (props) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    setProduct(props);
    setStyle(props.styles[0]);
  }, [props]);


  return (
    <div>
      <StarRating />
      <div>{product.category}</div>
      <div>{product.name}</div>
      <Price {...style}/>
    </div>
  )
}


export default ProductInfo;