import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'


const StyleThumbnail = (props) => {
  const [style, setStyle] = useState(props.currentStyle);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.currentStyle);
  }, [props]);



  if (!active) {
    return (
        <Image src={style}/>
    );
  } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
    return (
        <Image src={style}/>
  );
  }
}


export default StyleThumbnail;