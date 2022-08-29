import React, { useState, useEffect } from 'react';
import StyleThumbnail from './styleThumbnail.jsx';


const ThumbnailGallery = (props) => {
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStyle(props.style);
    let tempStyles = [];
    if (props.product.styles) {
      props.product.styles.forEach((obj) => {
        tempStyles.push(obj.photos[0].thumbnail_url)
      })
    };
    setStyles(tempStyles);
  }, [props]);


  if (JSON.stringify(style) !== JSON.stringify({})) {
      return (
        <div>
          {styles.map(currentStyle => (
            <StyleThumbnail currentStyle={currentStyle}/>
          ))}
        </div>
      );
  }
}


export default ThumbnailGallery;