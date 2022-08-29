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
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div>
      <ImageGallery items={images} useBrowserFullscreen={false} showPlayButton={false} thumbnailPosition={'left'} disableThumbnailScroll={true}/>
    </div>
  )
}


export default MainCarousel;