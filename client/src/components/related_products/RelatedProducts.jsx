import React, { useState, useEffect, useRef } from 'react';
import '../../assets/stylesRelatedProducts.css';
import OutfitList from './OutfitList.jsx';
import ProductList from './ProductList.jsx';
import ComparisonTable from './Comparison.jsx'
import axios from 'axios';
import styled from 'styled-components';
import '../../assets/stylesOverview.css';


const RelatedProds = styled.div`
  background-color: #D8CFD0;
  padding: 1% 5% 5% 5%;
`

const RelatedProducts = ({currentProductID, handleProductChange, userOutfits, setUserOutfits, handleAddClick, product}) => {
  const [productForComparison, setProductForComparison] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productNum, setProductNum] = useState(currentProductID);
  const [isComparison, setIsComparison] = useState(false);
  const [itemToCompare, setItemToCompare] = useState(null);
  const [localOutfits, setLocalOutfits] = useState([1, 2, 3, 4, 5]);
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => {
    setLocalOutfits(userOutfits);
  }, [userOutfits])


  useEffect(() => {
    setProductNum(currentProductID);
  }, [currentProductID]);

  useEffect(() => {
    axios.get('/relatedProducts', {params: {productID: productNum}})
      .then((response) => {
        console.log('resoponse', response.data);
        setRelatedProducts(response.data)
      });
  }, [productNum]);

  const handleComparison = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.parentElement.parentElement.className === 'card') {
      setItemToCompare(e.target.parentElement.parentElement.parentElement.id);
    } else {
      setItemToCompare(e.target.parentElement.parentElement.id);
    }
    if (isComparison) {
      setIsComparison(false);
    }
  };

  useEffect(() => {
    if (firstUpdate) {
      setFirstUpdate(false);
      return;
    }
    axios.get('/products', {params: {product_id: itemToCompare}})
    .then((response) => {
      setProductForComparison(response.data);
      isComparison ? setIsComparison(false) : setIsComparison(true);
    })
  }, [itemToCompare]); //probably dont need this

  if (isComparison) {
    return (
      <RelatedProds id="related_products">
        <p className="related-title">Related Products</p>
        <ComparisonTable product={product} productForComparison={productForComparison}/>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange} productWithRatings={product}/>
        <p className="outfit-title">Your Outfit</p>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange} userOutfits={localOutfits} setUserOutfits={setUserOutfits} handleAddClick={handleAddClick} productWithRatings={product}/>
      </RelatedProds>
    )
  } else {
    return (
      <RelatedProds id="related_products">
        <p className="related-title">Related Products</p>
        <ProductList relatedProducts={relatedProducts} handleComparison={handleComparison} handleProductChange={handleProductChange} productWithRatings={product}/>
        <p className="outfit-title">Your Outfit</p>
        <OutfitList productNum={productNum} handleProductChange={handleProductChange} userOutfits={localOutfits} setUserOutfits={setUserOutfits} handleAddClick={handleAddClick} productWithRatings={product}/>
      </RelatedProds>
    )
  }

}

export default RelatedProducts;
