import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const OutfitList = ({productNum}) => {
  const [userOutfits, setUserOutfits] = useState([]);
  useEffect(() => {
    //get the results from local storage and set the state with those
    if (userOutfits.length !== localStorage.length) {
      let keys = Object.keys(localStorage);
      axios.get('/storage', {params: {stored_IDs: keys}})
      .then((products) => setUserOutfits(products.data));
    }
  }, [userOutfits])

  const handleAddClick = () => {
    let isNewProduct = true;
    userOutfits.forEach(outfit => {
      if (~~outfit.id === productNum) {
        isNewProduct = false;
      }
    })
    if (isNewProduct) {
      let stringID = productNum.toString();
      localStorage.setItem(stringID, stringID);
      axios.get('/outfits', {params: {productID: productNum}})
      .then((response) => {
        setUserOutfits([...userOutfits, response.data]);
      })
    }
  };

  const handleRemove = (e) => {
    let id = e.target.parentElement.id;
    localStorage.removeItem(id);
    let filteredArr = userOutfits.filter((outfit) => {
      return (outfit.id !== ~~id );
    });
    setUserOutfits(filteredArr);
  }


  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="item"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={true}
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
        <div className="container" key={product.id}>
          <Card type="Outfit" product={product} handleRemove={handleRemove} id={product.id}/>
        </div>
        )
      })}
    </Carousel>
  )
}

export default OutfitList;