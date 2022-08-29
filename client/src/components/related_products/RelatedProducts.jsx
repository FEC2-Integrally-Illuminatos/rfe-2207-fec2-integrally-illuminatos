import React, { useState, useEffect } from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';

const RelatedProducts = (/*will take product id as prop*/) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [productNum, setProductNum] = useState(37331);

  useEffect(() => {
    axios.get('/relatedProducts', {params: {productID: productNum}})
      .then((response) => setRelatedProducts(response.data));
  }, [productNum]);

  return (
    <div id="related_products">
      <h2>Related Products</h2>
      <ProductList relatedProducts={relatedProducts}/>
      <h2>Your Outfit</h2>
      <OutfitList />
    </div>
  )
}

export default RelatedProducts;
