import React, { useState, useEffect } from 'react';
import StyleThumbnail from './styleThumbnail.jsx';
import styled from 'styled-components';

const GalleryStyled = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin-bottom: 20px;
  justify-content: left;
  `


const ThumbnailGallery = (props) => {
  const [styles, setStyles] = useState(props.styles);

  useEffect(() => {
    setStyles(props.styles);
  }, [props]);


  return (
        <GalleryStyled>
          {styles.map((currentStyle, key) => (
            <StyleThumbnail style={props.style} handleStyleChange={props.handleStyleChange} currentStyle={currentStyle} key={key}/>
          ))}
        </GalleryStyled>
      );
  // }
}


export default ThumbnailGallery;