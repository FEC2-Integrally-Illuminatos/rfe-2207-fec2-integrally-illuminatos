import React, { useState, useEffect } from 'react';


const Price = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);

  if (style.sale_price === null || style.sale_price === undefined) {
    return (
      <div>
        {style.original_price}
      </div>
    )
  } else {
    return (
      <div>
        {style.sale_price}  {style.original_price}
      </div>
    )
  };
}


export default Price;