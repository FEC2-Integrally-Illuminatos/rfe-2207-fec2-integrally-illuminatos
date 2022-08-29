import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import axios from 'axios';



const Overview = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get('/products', {params: {product_id: 37331}})
      .then((data) => {
        setProduct(data.data);
      })
  }, [])

  useEffect(() => {
    console.log(product);
  }, [product])

if (Object.keys(product).length > 0 ) {
  return (
    <div className='mainImg'>
      <div>
        <MainCarousel {...product}/>
      </div>
      <div>
        <ProductInfo {...product}/>
      </div>
      <div>
        <ProductOverview {...product}/>
      </div>
    </div>
    )
  }
}


export default Overview;
