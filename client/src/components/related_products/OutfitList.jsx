import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1200, min: 880 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 880, min: 580 },
    items: 2
  },
  small: {
    breakpoint: { max: 580, min: 0 },
    items: 1
  }
};

const OutfitList = ({productNum, handleProductChange, userOutfits, setUserOutfits, handleAddClick, productWithRatings}) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.id;
    localStorage.removeItem(id);
    let filteredArr = userOutfits.filter((outfit) => {
      return (outfit.id !== ~~id );
    });
    setUserOutfits(filteredArr);
  } //TODO: will need to move to app level

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="carousel-outfit"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass="item"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="container" onClick={handleAddClick}>
        <Card type="AddOutfit"/>
      </div>
      {userOutfits.map(product => {
        return (
        <div className="container" key={product.id} onClick={handleProductChange}>
          <Card type="Outfit" product={product} handleRemove={handleRemove} id={product.id} productWithRatings={productWithRatings}/>
        </div>
        )
      })}
    </Carousel>
  )
}

export default OutfitList;