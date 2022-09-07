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

const RelatedProducts = ({currentProductID, handleProductChange, userOutfits, setUserOutfits, handleAddClick, product}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productNum, setProductNum] = useState(currentProductID);
  const [isComparison, setIsComparison] = useState(false);
  const [itemToCompare, setItemToCompare] = useState(null);
  const [localOutfits, setLocalOutfits] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    setLocalOutfits(userOutfits);
  }, [userOutfits])


  useEffect(() => {
    setProductNum(currentProductID);
  }, [currentProductID]);


  useEffect(() => {
    axios.get('/relatedProducts', {params: {productID: productNum}})
      .then((response) => setRelatedProducts(response.data));
  }, [productNum]);

  const handleComparison = (e) => {
    e.stopPropagation();
    setItemToCompare(e.target.parentElement.id);
    isComparison ? setIsComparison(false) : setIsComparison(true);
  };

  useEffect(() => {
    console.log(itemToCompare);
  }, [itemToCompare]); //probably dont need this

  if (isComparison) {
    return (
      <RelatedProds id="related_products">
        <p class="related-title">Related Products</p>
        <ComparisonTable />
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange} productWithRatings={product}/>
        <p className="outfit-title">Your Outfit</p>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange} userOutfits={localOutfits} setUserOutfits={setUserOutfits} handleAddClick={handleAddClick} productWithRatings={product}/>
      </RelatedProds>
    )
  } else {
    return (
      <RelatedProds id="related_products">
        <p class="related-title">Related Products</p>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange} productWithRatings={product}/>
        <p class="outfit-title">Your Outfit</p>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange} userOutfits={localOutfits} setUserOutfits={setUserOutfits} handleAddClick={handleAddClick} productWithRatings={product}/>
      </RelatedProds>
    )
  }

}

export default RelatedProducts;
