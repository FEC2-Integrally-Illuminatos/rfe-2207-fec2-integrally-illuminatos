import React, { useState, useEffect } from 'react';
import StyleThumbnail from './styleThumbnail.jsx';


const ThumbnailGallery = (props) => {
  const [styles, setStyles] = useState(props.styles);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyles(props.styles);
  }, [props]);

// DIV BELOW WILL NEED TO BE FLEXBOX THAT FITS 4 THUMBNAILS PER ROW
  return (
        <div>
          {styles.map((currentStyle, key) => (
            <StyleThumbnail handleStyleChange={props.handleStyleChange} currentStyle={currentStyle} key={key}/>
          ))}
        </div>
      );
  // }
}


export default ThumbnailGallery;