import React, { useState, useEffect } from 'react';
import StyleThumbnail from './styleThumbnail.jsx';


const ThumbnailGallery = (props) => {
  const [styles, setStyles] = useState(props.thumbnailArray);
  const [style, setStyle] = useState(props.style);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.style);
    setStyles(props.thumbnailArray);
  }, [props]);

// DIV BELOW WILL NEED TO BE FLEXBOX THAT FITS 4 THUMBNAILS PER ROW
  return (
        <div>
          {styles.map((currentStyle, key) => (
            <StyleThumbnail currentStyle={currentStyle} key={key}/>
          ))}
        </div>
      );
  // }
}


export default ThumbnailGallery;