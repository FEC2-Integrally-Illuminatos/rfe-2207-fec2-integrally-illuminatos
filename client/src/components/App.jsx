import React, { useState, useEffect } from 'react';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import Reviews from "./reviews/Reviews.jsx";
import {FAQWrapper} from './faq/styles/FAQWrapper.styled.js';
import Wrapper from './faq/QuestionWrapper.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';




const App = () => {

  const [currentProductID, setCurrentProductID] = useState(37331);
  useEffect(() => {
    console.log('current product id', currentProductID);
  }, [currentProductID])

  const handleProductChange = (e) => {
    let productNum = null;
    if (e.target.className === 'star') {
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

  return (
    <>
      <h1>Chévere</h1>
      {/* <Overview/> */}
      <RelatedProducts currentProductID={currentProductID} handleProductChange={handleProductChange}/>
      <FAQWrapper>
        <Wrapper/>
      </FAQWrapper>
      <Reviews/>
    </>
  )
}





export default App;
