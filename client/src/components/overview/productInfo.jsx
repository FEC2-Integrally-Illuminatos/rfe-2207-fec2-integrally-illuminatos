import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import StyleName from './styleName.jsx';
import StyleThumbnail from './styleThumbnail.jsx';


const ProductInfo = (props) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    setProduct(props);
    setStyle(props.styles[0]);
  }, [props]);

  //NEED TO MAKE HANDLE CLICK FOR STYLE AND PASS DOWN

  return (
    <div>
        <StarRating {...product}/>
      <div>
        {product.category}
        </div>
      <div>
        {product.name}
      </div>
        <Price {...style}/>
        <StyleName {...style}/>
        <StyleThumbnail product={product} style={style}/>
    </div>
  )
}


export default ProductInfo;