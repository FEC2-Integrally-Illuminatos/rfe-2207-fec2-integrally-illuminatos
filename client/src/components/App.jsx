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


  const [currentProductID, setCurrentProductID] = useState(37311);
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});
  const [styles, setStyles] = useState({});
  const [loading, setLoading] = useState(true);

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
      <RelatedProducts currentProductID={currentProductID} handleProductChange={handleProductChange} setProduct={setProduct} product={product}/>
      <FAQWrapper>
        <Wrapper product={product}/>
      </FAQWrapper>
      <Reviews product={product}/>
    </Chevere>
    )
  )
}





export default App;
