import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../assets/stylesOverview.css';



const MainCarousel = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  let count = 0;
  let count2 = 0;

  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
  }, [props]);


  const photoSetter = (item) => {
    if (item.photos[count] === undefined) {
      count++;
      return 'http://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg';
    } else {
      let photo = item.photos[count].url;
      count++;
      return photo;
    }
  };

  const photoSetterThumb = (item) => {
    if (item.photos[count2] === undefined) {
      count2++;
      return 'http://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg';
    } else {
      let photo = item.photos[count2].thumbnail_url;
      count2++;
      return photo;
    }
  };

  const images = [
    {
      original: photoSetter(style),
      thumbnail: photoSetterThumb(style),
      sizes: 100,
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