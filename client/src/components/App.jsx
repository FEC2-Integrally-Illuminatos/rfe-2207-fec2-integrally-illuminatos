import React, { useState, useEffect } from 'react';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import Reviews from "./reviews/Reviews.jsx";
import {FAQWrapper} from './faq/styles/FAQWrapper.styled.js';
import Wrapper from './faq/QuestionWrapper.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';
import styled from 'styled-components';

const Chevere = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`




const App = () => {


  const [currentProductID, setCurrentProductID] = useState(37331);
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});
  const [styles, setStyles] = useState({});
  const [loading, setLoading] = useState(true);
  const [userOutfits, setUserOutfits] = useState([]);

  useEffect(() => {
    if(userOutfits.length !== localStorage.length) {
      let keys = Object.keys(localStorage);
      axios.get('/storage', {params: {stored_IDs: keys}})
      .then((products) => {
        console.log(products.data);
      setUserOutfits(products.data)
    });
    }
  }, [userOutfits])

  useEffect(() => {
    axios.get('/products', {params: {product_id: currentProductID}})
      .then((data) => {
        setProduct(data.data);
        setStyle(data.data.styles[0]);
        setStyles(data.data.styles);
        console.log('this is the data', data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductID])

  useEffect(() => {
    axios.get('/loading')
      .then(() => {
        setLoading(false);
      });
  });

  const handleProductChange = (e) => {
    let productNum = null;
    if (e.target.className === 'star' || e.target.clasName === 'remove') {
      return;
    }
    if (e.target.className === 'card') {
      productNum = e.target.id;
    } else if (e.target.parentElement.className === 'card') {
      productNum = e.target.parentElement.id;
    } else if (e.target.parentElement.parentElement.className ==='card') {
      productNum = e.target.parentElement.parentElement.id;
    }
    setCurrentProductID(~~productNum);
  }

  const handleAddClick = () => {
    let isNewProduct = true;
    userOutfits.forEach(outfit => {
      if (~~outfit.id === currentProductID) {
        isNewProduct = false;
      }
    })
    if (isNewProduct) {
      let stringID = currentProductID.toString();
      localStorage.setItem(stringID, stringID);
      axios.get('/outfits', {params: {productID: currentProductID}})
      .then((response) => {
        setUserOutfits([...userOutfits, response.data]);
      })
    }
  };


  return (
    loading
    ? (
      <div>
        Loading...
      </div>
    )
    : (
    <Chevere>
      <h1>Chévere</h1>
      {/* <Overview product={product} style={style} styles={styles}/> */}
      <RelatedProducts currentProductID={currentProductID} handleProductChange={handleProductChange} setProduct={setProduct} product={product} userOutfits={userOutfits} setUserOutfits={setUserOutfits} handleAddClick={handleAddClick}/>
      <FAQWrapper>
        <Wrapper product={product}/>
      </FAQWrapper>
      <Reviews product={product}/>
    </Chevere>
    )
  )
}





export default App;
