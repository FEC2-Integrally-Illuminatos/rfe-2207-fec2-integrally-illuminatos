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
  font-family: 'Yeseva One', cursive;
`
const CategoryDiv = styled.div`
  font-size: 16px;
  margin-top: 5%;
  margin-bottom: 3%;
  font-family: 'Yeseva One', cursive;
`
const NameDiv = styled.div`
  font-size: 30px;
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: 'Yeseva One', cursive;
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
        <CategoryDiv data-testid="counter">{product.category}</CategoryDiv>
        </div>
      <div>
        <NameDiv>{product.name}</NameDiv>
      </div>
        <Price {...style}/>
        <StyleName {...style}/>
        <ThumbnailGallery handleStyleChange={props.handleStyleChange} style={style} styles={styles}/>
        <SizeSelector product={product} style={style}/>
     </div>
  )
}


export default ProductInfo;