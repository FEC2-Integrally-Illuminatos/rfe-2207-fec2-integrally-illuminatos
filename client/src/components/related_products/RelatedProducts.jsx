import React, { useState, useEffect } from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';

const RelatedProducts = (/*will take product id as prop*/) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productNum, setProductNum] = useState(37331);
  const [isComparison, setIsComparison] = useState(false);

  useEffect(() => {
    axios.get('/relatedProducts', {params: {productID: productNum}})
      .then((response) => setRelatedProducts(response.data));
  }, [productNum]);

  const handleComparison = () => {
    console.log('handle comparison')
    isComparison ? setIsComparison(false) : setIsComparison(true);
  }

  if (isComparison) {
    return (
      <div id="related_products">
        <h2>Related Products</h2>
        <div className="comparison">Comparison</div>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison}/>
        <h2>Your Outfit</h2>
        <OutfitList productNum={productNum}/>
      </div>
    )
  } else {
    return (
      <div id="related_products">
        <h2>Related Products</h2>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison}/>
        <h2>Your Outfit</h2>
        <OutfitList productNum={productNum}/>
      </div>
    )
  }

}

export default RelatedProducts;
