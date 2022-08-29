import React from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';

const RelatedProducts = () => {
  axios.get('/relatedProducts', {params: {productID: 37331}})
    .then((response) => console.log(response));
  return (
    <div id="related_products">
      <h2>Related Products</h2>
      <ProductList />
      <h2>Your Outfit</h2>
      <OutfitList />
    </div>
  )
}

export default RelatedProducts;
