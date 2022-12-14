import React, { useState, useEffect } from 'react';
import '../../assets/stylesOverview.css';
import styled from 'styled-components';
import GalleryThumbnail from './galleryThumbnail.jsx';
import FullscreenModal from './fullscreenModal.jsx';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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

const SecondDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`


const ThumbnailDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex start;
  width: 60%;
  top: 2%;
  left: 1%;
`

const LeftArrowDiv = styled.div`
  display: flex;
  height: 81%;
  align-items: center;
`

const RightArrowDiv = styled.div`
  display: flex;
  height: 81%;
  align-items: center;
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
  padding-bottom: 80%;
  width: 100%;
  &:hover {
    cursor: zoom-in;
  }
`



const AlexCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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
      if (photo.url === null || photo.url === undefined || photo.url.slice(0, 5) !== 'https') {
        results.push('https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=');
      } else {
        results.push(photo.url);
      }
    });
    return results;
  });
  const [ThumbImageData, setThumbImageData] = useState(() => {
    let results = [];
    props.style.photos.forEach((photo, index) => {
      if (index >= 7) {
        return;
      };
      if (photo.thumbnail_url === null || photo.thumbnail_url === undefined || photo.thumbnail_url.slice(0, 5) !== 'https') {
        results.push('https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=');
      } else {
        results.push(photo.thumbnail_url);
      }
    });
    return results;
  });


  useEffect(() => {
    setIsOpen(false);
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
        if (photo.url === null || photo.url === undefined || photo.url.slice(0, 5) !== 'https') {
          results.push('https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=');
        } else {
          results.push(photo.url);
        }
      });
      return results;
    });
    setThumbImageData(() => {
      let results = [];
      props.style.photos.forEach((photo, index) => {
        if (index >= 7) {
          return;
        };
        if (photo.thumbnail_url === null || photo.thumbnail_url === undefined || photo.thumbnail_url.slice(0, 5) !== 'https') {
          results.push('https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=');
        } else {
          results.push(photo.thumbnail_url);
        }
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
    e.stopPropagation();
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      let temp = current - 1;
      setCurrent(temp);
    };
    e.stopPropagation();
  }

  const handleThumbClick = (val) => {
    setCurrent(val);
  }

  return (
    <>
    {/* <SecondDiv> */}
      <LeftArrowDiv onClick={(e) => {handleBackClick(e);}}>
      <FontAwesomeIcon onClick={(e) => {handleNextClick(e);}} icon={faChevronLeft} color='#E98074' size='5x' className='rightArrow'/>
      </LeftArrowDiv>
      <MainImageDiv image_url={MainImageData[current]} onClick={() => setIsOpen(true)}>
        <ThumbnailDiv>
          {ThumbImageData.map((thumbnail, key) => {
            return <GalleryThumbnail handleThumbClick={handleThumbClick} current={current} thumbnail={thumbnail} key={key} index={key}/>
          })}
        </ThumbnailDiv>
      </MainImageDiv>
      <RightArrowDiv>
        <FontAwesomeIcon onClick={(e) => {handleNextClick(e);}} icon={faChevronRight} color='#E98074' size='5x' className='rightArrow'/>
      </RightArrowDiv>
    {/* </SecondDiv> */}
      {isOpen && <FullscreenModal length={length} setIsOpen={setIsOpen} handleBackClick={handleBackClick} handleNextClick={handleNextClick} setCurrent={setCurrent} current={current} product={props.product} style={props.style}/> }
    </>
  );
}


export default AlexCarousel;