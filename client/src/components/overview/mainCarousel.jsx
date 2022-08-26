import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from 'react-image-gallery';
import '../../assets/stylesOverview.css';



const MainCarousel = (props) => {
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
    <ImageGallery items={images} useBrowserFullscreen={false} showPlayButton={false} thumbnailPosition={'left'} disableThumbnailScroll={true}/>
  )
}


export default MainCarousel;