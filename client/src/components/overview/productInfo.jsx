import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';
import 'dotenv/config';


const ProductInfo = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {params: {page: 1, count: 5}, headers: {Authorization: process.env.API_KEY}})
      .then((data) => {
        console.log(data.data);
      });
  }, [])

  return (
    <div>

    </div>
  )
}


export default ProductInfo;