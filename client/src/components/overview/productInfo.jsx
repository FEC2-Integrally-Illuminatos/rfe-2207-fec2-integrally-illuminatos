import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import StyleName from './styleName.jsx';
import StyleThumbnail from './styleThumbnail.jsx';
import ThumbnailGallery from './thumbnailGallery.jsx';
import SizeSelector from './sizeSelector.jsx';
import SocialMedia from './socialMedia.jsx';
import styled from 'styled-components';

const SocialStarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid;
`


const ProductInfo = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [styles, setStyles] = useState(props.styles);

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
    setStyles(props.styles);
  }, [props]);

  return (
    <div>
      <SocialStarDiv>
        <SocialMedia style={style}/>
        <StarRating {...product}/>
      </SocialStarDiv>
      <div>
        <h4 data-testid="counter">{product.category}</h4>
        </div>
      <div>
        <h4>{product.name}</h4>
      </div>
        <Price {...style}/>
        <StyleName {...style}/>
        <ThumbnailGallery handleStyleChange={props.handleStyleChange} style={style} styles={styles}/>
        <SizeSelector product={product} style={style}/>
     </div>
  )
}


export default ProductInfo;