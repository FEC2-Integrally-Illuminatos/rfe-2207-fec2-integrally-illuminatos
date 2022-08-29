import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import axios from 'axios';



const Overview = (props) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    axios.get('/products', {params: {product_id: 37311}})
      .then((data) => {
        setProduct(data.data);
        setStyle(data.data.styles[0]);
      })
  }, [])

  useEffect(() => {
    console.log(product, style);
  }, [product])

//CREATE CLICK HANDLER FOR SETTING SELECTED STYLE

if (Object.keys(product).length > 0 ) {
  return (
    <div className='mainImg'>
      <div>
        <MainCarousel product={product} style={style}/>
      </div>
      <div>
        <ProductInfo product={product} style={style}/>
      </div>
      <div>
        <ProductOverview product={product} style={style}/>
      </div>
    </div>
    )
  }
}


export default Overview;
