import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'


const StyleThumbnail = (props) => {
  const [style, setStyle] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.currentStyle);
    console.log(props.currentStyle);
  }, [props]);


  if (JSON.stringify(style) !== JSON.stringify({})) {
    if (!active) {
      return (
          <Image src={style}/>
      );
    } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
      return (
        <div>
          <Image src={style}/>
        </div>
    );
    }
  }
}


export default StyleThumbnail;