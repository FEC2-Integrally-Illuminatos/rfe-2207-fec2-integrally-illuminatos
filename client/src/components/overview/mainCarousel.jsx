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

  const images = [
    {
      original: style.photos[0].url,
      thumbnail: style.photos[0].thumbnail_url,
    },
    {
      original: style.photos[1].url,
      thumbnail: style.photos[1].thumbnail_url,
    },
    {
      original: style.photos[2].url,
      thumbnail: style.photos[2].thumbnail_url,
    },
  ];

  return (
    <div>
      <ImageGallery items={images} useBrowserFullscreen={false} showPlayButton={false} thumbnailPosition={'left'} disableThumbnailScroll={true}/>
    </div>
  )
}


export default MainCarousel;