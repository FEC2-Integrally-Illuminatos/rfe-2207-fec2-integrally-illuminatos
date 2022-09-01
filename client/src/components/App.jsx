import React from 'react';
import {FAQWrapper} from './faq/styles/FAQWrapper.styled.js';
import Wrapper from './faq/QuestionWrapper.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';

const App = () => {
  return (
    <>
      <RelatedProducts />
      <FAQWrapper>
        <Wrapper/>
      </FAQWrapper>
    </>
  )
}





export default App;

