import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Checkmark } from 'react-checkmark';


const StyleThumbnail = (props) => {
  const [style, setStyle] = useState(props.currentStyle);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.currentStyle);
  }, [props]);

  const handleClick = (e) => {
    props.handleStyleChange(style);
  };

  if (!active) {
    return (
        <Image onClick={(e) => {handleClick(e)}} src={style.photos[0].thumbnail_url}/>
    );
  } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
    return (
        <Image src={style.photos[0].thumbnail_url}/>
  );
  }
}


export default StyleThumbnail;