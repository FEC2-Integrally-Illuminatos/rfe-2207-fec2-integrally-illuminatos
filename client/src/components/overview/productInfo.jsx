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
  margin-bottom: 5%;
  font-family: 'Yeseva One', cursive;
`
const NameDiv = styled.div`
  font-size: 30px;
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: 'Yeseva One', cursive;
`


const ProductInfo = (props) => {


  return (
    <div>
      <SocialStarDiv>
        <SocialMedia style={props.style}/>
        <StarRating {...props.product}/>
      </SocialStarDiv>
      <div>
        <CategoryDiv data-testid="counter">{props.product.category}</CategoryDiv>
        </div>
      <div>
        <NameDiv>{props.product.name}</NameDiv>
      </div>
        <Price {...props.style}/>
        <StyleName {...props.style}/>
        <ThumbnailGallery handleStyleChange={props.handleStyleChange} style={props.style} styles={props.styles}/>
        <SizeSelector product={props.product} style={props.style}/>
     </div>
  )
}


export default ProductInfo;