import React, { useState, useEffect } from 'react';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import Reviews from "./reviews/Reviews.jsx";
import {FAQWrapper} from './faq/styles/FAQWrapper.styled.js';
import Wrapper from './faq/QuestionWrapper.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';

const App = () => {
  return (
    <>
      <h1>Chévere</h1>
      {/* <Overview/> */}
      <RelatedProducts />
      <FAQWrapper>
        <Wrapper/>
      </FAQWrapper>
      <Reviews/>
    </>
  )
}





export default App;
