import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
// import { Checkmark } from 'react-checkmark';
import styled from 'styled-components';


const ImageBox = styled.div`
  box-shadow: 5px 5px 5px grey;
  border: ${props => props.selected ? "4px solid #0E216C" : "0.01px solid grey"};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: no-repeat center center;
  float: left;
  background-image: url(${(props => props.link)});
  background-size: cover;
  height: 0;
  padding-bottom: 20%;
  width: 17%;
  margin: 2px;
`
const CheckPos = styled.div `
  margin-top: 30%;
  margin-left: 55%;
`

const MyCheckmark = styled.img `
  width: 35%;
  height: auto;
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
    if (item.photos[0] === undefined) {
      return 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
    } else {
      return item.photos[0].thumbnail_url;
    }
  };


  if (!active) {
    return (
      <ImageBox selected={active} link={photoSetter(style)} onClick={(e) => {handleClick(e)}}>
      </ImageBox>
    );
  } else { //ADD FEATURES TO HIGHLIGHT and ADD CHECKMARK TO INDICATE SELECTED
    return (
      <ImageBox selected={active} link={photoSetter(style)} onClick={(e) => {handleClick(e)}}>
        <MyCheckmark src='https://toppng.com/uploads/preview/12-months-blue-check-mark-icon-11563057671d6e51m4dr7.png'/>
      </ImageBox>
  );
  }
}


export default StyleThumbnail;