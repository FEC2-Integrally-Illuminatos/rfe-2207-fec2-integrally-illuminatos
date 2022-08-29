import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'


const StyleThumbnail = (props) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.style);
    setProduct(props.product);
  }, [props]);

  useEffect(() => {
    console.log(props.style, props.product)
  }, [props]);

  if (JSON.stringify(style) !== JSON.stringify({})) {
    if (!active) {
      return (
        <div>
          <Image src={style.photos[0].thumbnail_url}/>
         </div>
      );
    } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
      return (
        <div>
          <Image src={style.photos[0].thumbnail_url}/>
        </div>
    );
    }
  }
}


export default StyleThumbnail;