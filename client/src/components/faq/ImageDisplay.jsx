import React from 'react';
import ImageThumb from './ImageThumb.jsx';
// import {uuid} from 'uuidv4';

export default function ImageDisplay({images}) {
  return (
    <>
    {images.map((src) => <ImageThumb url={src} key={src}/>)}
    </>
  )
}