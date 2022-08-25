import React from 'react';
import '../../assets/stylesOverview.css';
import MainCarousel from './mainCarousel.jsx';
import ProductInfo from './productInfo.jsx';



const Overview = () => {
  return (
    <div className='mainImg'>
      <MainCarousel />
      <ProductInfo />
    </div>
  )
}


export default Overview;
