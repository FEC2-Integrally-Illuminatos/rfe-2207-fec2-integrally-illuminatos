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
  return (
    <Chevere>
      <h1>Chévere</h1>
      <Overview/>
      <RelatedProducts />
      <FAQWrapper>
        <Wrapper/>
      </FAQWrapper>
      <Reviews/>
    </Chevere>
  )
}





export default App;
