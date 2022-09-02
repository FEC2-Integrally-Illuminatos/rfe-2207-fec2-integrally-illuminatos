import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import MetaInfo from './metaInfo.jsx';
import axios from 'axios';


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
    <div className='mainImg' id='overview'>
      <div>
        <MainCarousel product={product} style={style}/>
      </div>
      <div>
        <ProductInfo handleStyleChange={handleStyleChange} styles={styles} product={product} style={style}/>
      </div>
      <div>
        <ProductOverview product={product} style={style}/>
      </div>
      <div>
        <MetaInfo product={product}/>
      </div>
    </div>
  );
  // }
}


export default Overview;
