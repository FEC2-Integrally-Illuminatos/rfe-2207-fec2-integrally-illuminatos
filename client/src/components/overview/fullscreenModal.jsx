import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../../assets/stylesOverview.css';
import {faCaretRight, faCaretLeft, faCircle, faCircleDot, faX} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";


const ThumbnailDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  top: 5%;
  left: 37%;
`

const LeftArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  left: 5%;
`

const RightArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  right: 5%;
`

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: auto;
  height: auto;
  max-width: 1080px;
  max-height: 720px;
  overflow: hidden;
  `
  export const ContentBox = styled.div`
  background-image: url(${(props => props.image_url)});
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
`

export const CloseButtonDiv = styled.div`
  position: absolute;
  left: 84%;
  top: 2%;
  width: 12px !important;
  height; 12px !important;
`

export default function FullscreenModal (props) {

  const createIcons = () => {
    let arr = [];
    for (let i = 0; i < props.length; i++) {
      arr.push(i);
    };
    return arr;
  };

  return (
    <ModalWrap>
      <Img>
      <SideBySideMagnifier
        imageSrc={props.style.photos[props.current].url} alwaysInPlace={true} />
      </Img>
      <CloseButtonDiv>
        <FontAwesomeIcon onClick={(e) => {props.setIsOpen(false);}} icon={faX} color='white' size='3x' className='xmark'/>;
      </CloseButtonDiv>
      <ThumbnailDiv>
        {createIcons().map((item, key) => {
          if (item === props.current) {
            return <FontAwesomeIcon onClick={(e) => {props.setCurrent(item);}} icon={faCircle} color='#E98074' size='1x' className=''/>;
          } else {
            return <FontAwesomeIcon onClick={(e) => {props.setCurrent(item);}} icon={faCircleDot} color='#E98074' size='1x' className='outlinedot'/>;
          }
        })}
      </ThumbnailDiv>
      <LeftArrowDiv>
        <FontAwesomeIcon onClick={(e) => {props.handleBackClick(e)}} icon={faCaretLeft} color='white' size='7x' className='fullscreenarrows'/>
      </LeftArrowDiv>
      <RightArrowDiv>
        <FontAwesomeIcon onClick={(e) => {props.handleNextClick(e)}} icon={faCaretRight} color='white' size='7x' className='fullscreenarrows'/>
      </RightArrowDiv>
    </ModalWrap>
  )
}