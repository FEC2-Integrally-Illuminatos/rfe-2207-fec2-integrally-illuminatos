import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import StyleName from './styleName.jsx';
import StyleThumbnail from './styleThumbnail.jsx';
import ThumbnailGallery from './thumbnailGallery.jsx';
import SizeSelector from './sizeSelector.jsx';


const ProductInfo = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [styles, setStyles] = useState(props.styles);


  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
    setStyles(props.styles);
  }, [props]);


  //NEED TO PASS DOWN ON CHANGE FOR SIZE AND QUANTITY TO SIZESELECTOR AND QUANTIY SELECTOR

  return (
    <div>
        <StarRating {...product}/>
      <div>
        <h4>{product.category}</h4>
        </div>
      <div>
        <h4>{product.name}</h4>
      </div>
        <Price {...style}/>
        <StyleName {...style}/>
        <ThumbnailGallery handleStyleChange={props.handleStyleChange} styles={styles}/>
        <SizeSelector product={product} style={style}/>
     </div>
  )
}


export default ProductInfo;