import React, { useState, useEffect } from 'react';


const Price = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);

  if (style.sale_price === null || style.sale_price === undefined) {
    return (
      <div>
        <h4>{style.original_price}</h4>
      </div>
    )
  } else {
    return (
      <div>
        <h4>{style.sale_price}  {style.original_price}</h4>
      </div>
    )
  };
}


export default Price;