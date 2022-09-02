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

  const photoSetter = (item) => {
    if (item.photos[0] === undefined) {
      return 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
    } else {
      return item.photos[0].thumbnail_url;
    }
  };

  if (!active) {
    return (
        <Image onClick={(e) => {handleClick(e)}} src={photoSetter(style)}/>
    );
  } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
    return (
        <Image src={photoSetter(style)}/>
  );
  }
}


export default StyleThumbnail;