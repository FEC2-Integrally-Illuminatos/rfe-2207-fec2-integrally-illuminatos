import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import axios from 'axios';


const ProductInfo = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get('/products', {params: {product_id: 37331}})
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