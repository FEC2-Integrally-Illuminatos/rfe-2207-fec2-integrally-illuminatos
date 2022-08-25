import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';


const ProductInfo = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get('/https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {param: {page: 1, count: 5}})
      .then((data) => {
        console.log(data.data);
      });
  }, [])

  return (
    <div className>

    </div>
  )
}


export default ProductInfo;