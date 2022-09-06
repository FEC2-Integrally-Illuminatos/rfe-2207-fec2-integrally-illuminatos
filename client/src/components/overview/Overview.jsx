import React, { useState, useEffect } from 'react';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import MetaInfo from './metaInfo.jsx';
import axios from 'axios';
import styled from 'styled-components';

const OverviewDiv = styled.div`
  background: #F2F1EF;
  display: flex;
`

const CarouselDiv = styled.div`
  width: 67%;
  margin: 2% 0.5% 2% 2%;
`
const InfoDiv = styled.div`
  width: 33%;
  margin: 2% 2% 2% 0.5%;

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
    <div>
    <OverviewDiv>
      <CarouselDiv>
        <MainCarousel product={product} style={style}/>
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
  // }
}


export default Overview;
