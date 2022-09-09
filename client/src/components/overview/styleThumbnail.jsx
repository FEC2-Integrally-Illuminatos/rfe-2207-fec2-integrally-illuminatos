import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';


const ImageBox = styled.div`
  box-shadow: 5px 5px 5px grey;
  border: ${props => props.selected ? "4px solid #0E216C" : "0.01px solid grey"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: no-repeat center center;
  float: left;
  background-image: url(${(props => props.link)});
  background-size: cover;
  height: 0;
  padding-bottom: 18%;
  width: 18%;
  margin: 8px;
  &:hover {
    cursor: pointer;
  }
`
const CheckPos = styled.div `
  margin-top: 30%;
  margin-left: 55%;
`

const MyCheckmark = styled.img `
  width: 32%;
  height: auto;
  border-radius: 50%;
  margin-top: 32%;
  margin-left: 67%;
  background: transparent;
  background-color: transparent;
`

const StyleThumbnail = (props) => {
  const [style, setStyle] = useState(props.currentStyle);
  const [active, setActive] = useState(false);


  useEffect(() => {
    setStyle(props.currentStyle);
    if (props.style.style_id === props.currentStyle.style_id) {
      setActive(true);
    } else {
      setActive(false);
    };
  }, [props]);

  const handleClick = (e) => {
    props.handleStyleChange(style);
  };


  const photoSetter = (item) => {
    if (item.photos[0].thumbnail_url === undefined || item.photos[0].thumbnail_url === null || item.photos[0].thumbnail_url.slice(0, 5) !== 'https') {
      return 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=';
    } else {
      return item.photos[0].thumbnail_url;
    }
  };


  if (!active) {
    return (
      <ImageBox selected={active} link={photoSetter(style)} onClick={(e) => {handleClick(e)}}>
      </ImageBox>
    );
  } else {
    return (
      <ImageBox selected={active} link={photoSetter(style)} onClick={(e) => {handleClick(e)}}>
        <MyCheckmark src='https://toppng.com/uploads/preview/12-months-blue-check-mark-icon-11563057671d6e51m4dr7.png'/>
      </ImageBox>
  );
  }
}


export default StyleThumbnail;