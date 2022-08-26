import React from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';

const RelatedProducts = () => {
  return (
    <div id="related_products">
      <ProductList />
      <OutfitList />
    </div>
  )
}

export default RelatedProducts;
