import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import StarRating from './Stars.jsx';

// const CardWordsContainer = styled.div`
//   padding: 2%;
//   background-color: red;
// `
const CardWordsContainer = styled.div`

`


const Card = ({type, product, handleRemove, id, handleComparison, productWithRatings}) => {
  if (type === 'Product') {
    return (
      <div className="card" id={id}>
        <FontAwesomeIcon icon={faStar} onClick={handleComparison}/>
        <div className="image-conatiner">
          <img className="thumbnail" src={product.picture} />
        </div>
        <CardWordsContainer className="words-container">
          <p className="category">{product.category}</p>
          <h1 className="name">{product.name}</h1>
          {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
          <p className="price">${product.default_price}</p>
          {/* TODO: handle sale prices */}
          <StarRating ratings={productWithRatings.ratings}/>
        </CardWordsContainer>
      </div>
    )
  }
  if (type === 'Outfit') {
    return (
      <div className="card" id={id}>
        <div className="remove">
        <FontAwesomeIcon icon={faXmark} onClick={handleRemove} />
        </div>
        <div className="image-conatiner">
          <img className="thumbnail" src={product.picture} />
        </div>
        <CardWordsContainer className="words-container">
          <p className="category">{product.category}</p>
          <h1 className="name">{product.name}</h1>
          {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
          <p className="price">${product.default_price}</p>
          {/* TODO: handle sale prices */}
          <StarRating ratings={productWithRatings.ratings}/>
        </CardWordsContainer>
      </div>
    )
  }
  if (type === 'AddOutfit') {
    return (
      <div className="card add-card">
        <h1>Add To Outfit</h1>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    )
  }
  if (type === 'noProducts') {
    return (
      <div className="card no-products">
        <h1>No Related Products</h1>
      </div>
    )
  }
}

export default Card;