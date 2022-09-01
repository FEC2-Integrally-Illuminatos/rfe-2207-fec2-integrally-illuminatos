import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import MetaInfo from './metaInfo.jsx';
import axios from 'axios';
import SocialMedia from './socialMedia.jsx';


const Overview = (props) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});
  const [styles, setStyles] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('/loading')
      .then(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    axios.get('/products', {params: {product_id: 37315}})
      .then((data) => {
        setProduct(data.data);
        setStyle(data.data.styles[0]);
        setStyles(data.data.styles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    console.log(product, style);
  }, [product])

  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);
  }

// if (Object.keys(product).length > 0 ) {
  return (
    loading
    ? (
      <div>
        Loading...
      </div>
    )
    : (
    <div className='mainImg'>
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
        <MetaInfo />
      </div>
      <div>
        <SocialMedia style={style}/>
      </div>
    </div>
    )
  );
  // }
}


export default Overview;
