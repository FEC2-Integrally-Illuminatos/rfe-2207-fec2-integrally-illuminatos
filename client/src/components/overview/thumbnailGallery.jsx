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


  // if (JSON.stringify(style) !== JSON.stringify({})) {
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