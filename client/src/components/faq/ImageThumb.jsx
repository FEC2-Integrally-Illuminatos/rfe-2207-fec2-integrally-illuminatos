import React from 'react';

export default function ImageThumb({url}) {
  return (
    <img src={url} alt="uploaded" width='80' height='auto'></img>
  )
}