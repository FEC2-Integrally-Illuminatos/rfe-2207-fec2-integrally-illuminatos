import React from 'react';
import ImageThumb from './ImageThumb.jsx';

export default function ImageDisplay({images}) {
  return (
    <>
    {images.map((src) => <ImageThumb url={src} key={src}/>)}
    </>
  )
}