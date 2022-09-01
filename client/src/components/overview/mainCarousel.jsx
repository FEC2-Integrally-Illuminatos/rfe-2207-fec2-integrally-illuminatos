import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../assets/stylesOverview.css';



const MainCarousel = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
  }, [props]);

  const photoSetter = (item) => {
    if (item.photos[1] === undefined) {
      return 'http://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg';
    } else {
      return item.photos[1].url;
    }
  };

  const photoSetterThumb = (item) => {
    if (item.photos[1] === undefined) {
      return 'http://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg';
    } else {
      return item.photos[1].thumbnail_url;
    }
  };

  const images = [
    {
      original: photoSetter(style),
      thumbnail: photoSetterThumb(style)
    },
    {
      original: photoSetter(style),
      thumbnail: photoSetterThumb(style),
    },
    {
      original: photoSetter(style),
      thumbnail: photoSetterThumb(style),
    },
  ];

  return (
    <div>
      <ImageGallery items={images} useBrowserFullscreen={false} showPlayButton={false} thumbnailPosition={'left'} disableThumbnailScroll={true}/>
    </div>
  )
}


export default MainCarousel;