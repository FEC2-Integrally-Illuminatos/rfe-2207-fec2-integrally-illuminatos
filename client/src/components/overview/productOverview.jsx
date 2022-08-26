import React, { useState, useEffect } from 'react';


const ProductOverview = (props) => {
  const [product, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);

  if (product.description.length > 0) {
    return (
      <div>
        <h3>
          {product.slogan}
        </h3>
        <p>
          {product.description}
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>
          {product.slogan}
        </h2>
      </div>
    )
  };
}


export default ProductOverview;