import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import StyleName from './styleName.jsx';
import StyleThumbnail from './styleThumbnail.jsx';
import ThumbnailGallery from './thumbnailGallery.jsx';


const ProductInfo = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [thumbnailArray, setThumbnailArray] = useState(() => {
    let tempStyles = [];
    props.product.styles.forEach((obj) => {
      tempStyles.push(obj.photos[0].thumbnail_url)
    })
    return tempStyles;
  });

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
    setThumbnailArray(() => {
      let tempStyles = [];
      props.product.styles.forEach((obj) => {
        tempStyles.push(obj.photos[0].thumbnail_url)
      })
      return tempStyles;
      });
  }, [props]);


  //NEED TO PASS DOWN CLICK HANDLER FOR STYLE TO CHILDREN

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
        {/* <StyleThumbnail product={product} style={style}/> */}
        <ThumbnailGallery product={product} thumbnailArray={thumbnailArray}/>
    </div>
  )
}


export default ProductInfo;