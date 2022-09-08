import React from 'react';
import Card from './Card.jsx';
import axios from 'axios';

//another carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const ProductList = ({relatedProducts, handleComparison, handleProductChange, productWithRatings}) => {

  if (relatedProducts.length === 0) {
    return (
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="carousel-products"
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
      partialVisible={false}
    >
      <div className="container">
        <Card type="noProducts"/>
      </div>
    </Carousel>
    )
  } else {
    return (
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-products"
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
        partialVisible={false}
      >
        {relatedProducts.map((product) => {
          return (
          <div className="container" key={product.id} onClick={handleProductChange}>
            <Card type="Product" product={product} handleComparison={handleComparison} id={product.id} productWithRatings={productWithRatings}/>
          </div>
          );
        })}
      </Carousel>
      )
    }
  }

export default ProductList;