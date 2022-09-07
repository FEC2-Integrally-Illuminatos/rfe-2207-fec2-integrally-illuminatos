import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import styled from 'styled-components';
import GalleryThumbnail from './galleryThumbnail.jsx';
import ExpandButton from './expandButton.jsx';
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos, MdFullscreen, MdClose} from 'react-icons/md';


const ContainerDiv = styled.div`
  position: relative;
  flex: 1 0 auto;
  height: auto;
  border: solid;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`
const StyledRightArrow = styled(MdOutlineArrowForwardIos)`
  color: white;
  font-size: 72px;
  &:hover {
    color: #4652DF;
    font-size: 80px
  }
`

const StyledLeftArrow = styled(MdOutlineArrowBackIos)`
  color: white;
  font-size: 72px;
  &:hover {
    color: #4652DF;
    font-size: 80px
  }
`

const ThumbnailDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 60%;
  top: 2%;
  left: 1%;
`

const LeftArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  left: -1%;
`

const RightArrowDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 40%;
  right: 5%;
`

const FullscreenDiv = styled.div`
  position: absolute;
  width: 5%;
  top: 0%;
  left: 91%;
`
const IconContainer = styled.div`
  position: relative;
  border: solid;
  width: 100%;
  height: 100%;
`

const MainImageDiv = styled.div`
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

const AlexCarousel = (props) => {
  const [product, setProduct] = useState(props.product);
  const [style, setStyle] = useState(props.style);
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(() => {
    if (props.style.photos.length > 6) {
      return 7;
    } else {
      return props.style.photos.length;
    }
  });
  const [MainImageData, setMainImageData] = useState(() => {
    let results = [];
    props.style.photos.forEach((photo, index) => {
      if (index >= 7) {
        return;
      };
      results.push(photo.url);
    });
    return results;
  });
  const [ThumbImageData, setThumbImageData] = useState(() => {
    let results = [];
    props.style.photos.forEach((photo, index) => {
      if (index >= 7) {
        return;
      };
      results.push(photo.thumbnail_url);
    });
    return results;
  });


  useEffect(() => {
    setProduct(props.product);
    setStyle(props.style);
    setCurrent(0);
    setLength(() => {
      if (props.style.photos.length > 6) {
        return 7;
      } else {
        return props.style.photos.length;
      }
    });
    setMainImageData(() => {
      let results = [];
      props.style.photos.forEach((photo, index) => {
        if (index >= 7) {
          return;
        };
        results.push(photo.url);
      });
      return results;
    });
    setThumbImageData(() => {
      let results = [];
      props.style.photos.forEach((photo, index) => {
        if (index >= 7) {
          return;
        };
        results.push(photo.thumbnail_url);
      });
      return results;
    });
  }, [props]);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (current === length - 1) {
      setCurrent(0);
    } else {
      let temp = current + 1;
      setCurrent(temp);
    };
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      let temp = current - 1;
      setCurrent(temp);
    };
  }

  const handleThumbClick = (val) => {
    console.log('clicked');
    setCurrent(val);
  }

  return (
      <MainImageDiv image_url={MainImageData[current]}>
        <ThumbnailDiv>
          {ThumbImageData.map((thumbnail, index) => {
            return <GalleryThumbnail handleThumbClick={handleThumbClick} current={current} thumbnail={thumbnail} index={index}/>
          })}
        </ThumbnailDiv>
        {/* <IconContainer> */}
          <LeftArrowDiv onClick={(e) => {handleBackClick(e);}}>
            <StyledLeftArrow/>
          </LeftArrowDiv>
          <RightArrowDiv>
            <StyledRightArrow onClick={(e) => {handleNextClick(e);}}/>
          </RightArrowDiv>
          <FullscreenDiv>
            <ExpandButton product={product} style={style} current={current}/>
          </FullscreenDiv>
        {/* </IconContainer> */}
      </MainImageDiv>
  );
}


export default AlexCarousel;