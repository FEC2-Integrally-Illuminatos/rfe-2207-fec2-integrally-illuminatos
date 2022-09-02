import React, { useState, useEffect } from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import ComparisonTable from './Comparison.jsx'
import axios from 'axios';
import styled from 'styled-components';

const RelatedProds = styled.div`
  background-color: #D8CFD0;
  padding: 1% 5% 5% 5%;
`

const RelatedProducts = ({currentProductID, handleProductChange, }) => {
  console.log('product id in related products', currentProductID);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productNum, setProductNum] = useState(currentProductID);
  const [isComparison, setIsComparison] = useState(false);
  const [itemToCompare, setItemToCompare] = useState(null);


  useEffect(() => {
    setProductNum(currentProductID);
  }, [currentProductID]);


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
      <RelatedProds id="related_products">
        <h2>Related Products</h2>
        <ComparisonTable />
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange}/>
        <h2>Your Outfit</h2>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange}/>
      </RelatedProds>
    )
  } else {
    return (
      <RelatedProds id="related_products">
        <h2>Related Products</h2>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange}/>
        <h2>Your Outfit</h2>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange}/>
      </RelatedProds>
    )
  }

}

export default RelatedProducts;
