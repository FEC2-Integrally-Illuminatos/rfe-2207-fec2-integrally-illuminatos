import React, { useState, useEffect } from 'react';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import MetaInfo from './metaInfo.jsx';
import axios from 'axios';
import AlexCarousel from './alexCarousel.jsx';
import styled from 'styled-components';

const OverviewDiv = styled.div`
  background: #F2F1EF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 3%;
`

const CarouselDiv = styled.div`
  display: flex;
  width: 58%;
  margin: 3% 0% 3% 0%;

`

const InfoDiv = styled.div`
  width: 35%;
  margin: 2% 0% 2% 0%;

`

const Overview = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [styles, setStyles] = useState(props.styles);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
    setStyles(props.styles);
  }, [props]);


  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);
  }

  return (
    <div id='overview'>
      <OverviewDiv>
        <CarouselDiv>
          <AlexCarousel product={product} style={style}/>
        </CarouselDiv>
        <InfoDiv>
          <div>
            <ProductInfo handleStyleChange={handleStyleChange} styles={styles} product={product} style={style}/>
          </div>
          <div>
            <ProductOverview product={product} style={style}/>
          </div>
          <div>
            <MetaInfo product={product}/>
          </div>
        </InfoDiv>
      </OverviewDiv>
    </div>
  );
}


export default Overview;
