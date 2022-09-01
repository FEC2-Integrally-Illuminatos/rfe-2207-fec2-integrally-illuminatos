import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark'
import Detail from './detail.jsx';



const MetaInfo = (props) => {
  const [product, setProduct] = useState(props.product);

  useEffect(() => {
    setProduct(props.product);
  }, []);

  return (
    <div>
      {product.features.map((detail, key) => {
        return <Detail detail={detail} key={key}/>
      })}
    </div>
  );
}


export default MetaInfo;