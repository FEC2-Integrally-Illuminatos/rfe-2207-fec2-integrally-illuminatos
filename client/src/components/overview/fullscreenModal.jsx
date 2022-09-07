import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {MdArrowRight, MdArrowLeft, MdClose, MdCircle, MdOutlineTripOrigin} from 'react-icons/md';

const StyledCircle = styled(MdCircle)`
  color: gray;
  font-size: 20px;
`

const StyledOutline = styled(MdOutlineTripOrigin)`
  color: gray;
  font-size: 20px;
  &:hover {
    color: white;
  }
`

const StyledClose = styled(MdClose)`
  color: white;
  font-size: 70px;
  &:hover {
    color: gray;
  }
`
const StyledRightArrow = styled(MdArrowRight)`
  color: white;
  font-size: 100px;
  &:hover {
    color: gray;
    font-size: 110px
  }
`

const StyledLeftArrow = styled(MdArrowLeft)`
  color: white;
  font-size: 100px;
  &:hover {
    color: gray;
    font-size: 110px
  }
`

const ThumbnailDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 33%;
  bottom: 7%;
  left: 33%;
`

const LeftArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  left: 6%;
`

const RightArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  right: 5%;
`

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 1;
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
export const Img = styled.img`
  margin: auto;
  display: block;
  border-radius: 8px;
  padding: 2%;
  max-width: 100%;
  max-height: 100%;
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
export const MainImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: no-repeat center center;
  float: left;
  background-image: url(${(props => props.image_url)});
  background-size: cover;
  height: 0;
  padding-bottom: 100%;
  width: 100%;
`

export default function FullscreenModal (props) {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);

//props.length

  const createIcons = () => {
    let arr = [];
    for (let i = 0; i < props.length; i++) {
      arr.push(i);
    };
    return arr;
  };

  return (
    <ModalWrap>
      <Img src={props.style.photos[props.current].url}></Img>
      <CloseButtonDiv>
        <StyledClose onClick={(e) => {props.setIsOpen(false);}}/>
      </CloseButtonDiv>
      <ThumbnailDiv>
        {createIcons().map((item, key) => {
          if (item === props.current) {
            return <StyledCircle onClick={(e) => {props.setCurrent(item);}}/>;
          } else {
            return <StyledOutline onClick={(e) => {props.setCurrent(item);}}/>;
          }
        })}
      </ThumbnailDiv>
      <LeftArrowDiv>
        <StyledLeftArrow onClick={(e) => {props.handleBackClick(e)}}/>
      </LeftArrowDiv>
      <RightArrowDiv>
        <StyledRightArrow onClick={(e) => {props.handleNextClick(e)}}/>
      </RightArrowDiv>
    </ModalWrap>
  )
}