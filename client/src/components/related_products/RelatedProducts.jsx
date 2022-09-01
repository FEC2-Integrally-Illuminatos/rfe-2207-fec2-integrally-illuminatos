import React, { useState, useEffect } from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import ComparisonTable from './Comparison.jsx'
import axios from 'axios';

const RelatedProducts = (/*will take product id as prop*/) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productNum, setProductNum] = useState(37331);
  const [isComparison, setIsComparison] = useState(false);
  const [itemToCompare, setItemToCompare] = useState(null);

  useEffect(() => {
    axios.get('/relatedProducts', {params: {productID: productNum}})
      .then((response) => setRelatedProducts(response.data));
  }, [productNum]);

  const handleComparison = (e) => {
    setItemToCompare(e.target.parentElement.id);
    isComparison ? setIsComparison(false) : setIsComparison(true);
  };

  useEffect(() => {
    console.log(itemToCompare);
  }, [itemToCompare]); //probably dont need this

  if (isComparison) {
    return (
      <div id="related_products">
        <h2>Related Products</h2>
        <ComparisonTable />
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
