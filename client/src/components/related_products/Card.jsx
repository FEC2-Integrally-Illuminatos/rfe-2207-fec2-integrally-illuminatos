import React from 'react';
import styled from 'styled-components';

// const CardWordsContainer = styled.div`
//   padding: 2%;
//   background-color: red;
// `
const CardWordsContainer = styled.div`

`

const Card = ({type, product, handleRemove, id, handleComparison}) => {
  if (type === 'Product') {
    return (
      <div className="card" id={id}>
        <button className="star" onClick={handleComparison}>*</button>
        <div className="image-conatiner">
          <img className="thumbnail" src={product.picture} />
        </div>
        <CardWordsContainer className="words-container">
          <p className="category">{product.category}</p>
          <h1 className="name">{product.name}</h1>
          {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
          <p className="price">${product.default_price}</p>
          {/* TODO: handle sale prices */}
          <div>Star Component</div>
        </CardWordsContainer>
      </div>
    )
  }
  if (type === 'Outfit') {
    return (
      <div className="card" id={id}>
        <button className="remove" onClick={handleRemove}>x</button>
        <div className="image-conatiner">
          <img className="thumbnail" src={product.picture} />
        </div>
        <CardWordsContainer className="words-container">
          <p className="category">{product.category}</p>
          <h1 className="name">{product.name}</h1>
          {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
          <p className="price">${product.default_price}</p>
          {/* TODO: handle sale prices */}
          <div>Star Component</div>
        </CardWordsContainer>
      </div>
    )
  }
  if (type === 'AddOutfit') {
    return (
      <div className="card add-card">
        <h1>Add To Outfit</h1>
        <button className="add">+++</button>
      </div>
    )
  }
}

export default Card;