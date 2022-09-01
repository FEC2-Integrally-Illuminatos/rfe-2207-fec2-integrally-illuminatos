import React from 'react';

const Card = ({type, product, handleRemove, id, handleComparison}) => {
  if (type === 'Product') {
    return (
      <div className="card" id={id}>
        <button className="star" onClick={handleComparison}>*</button>
        <div className="image-conatiner">
          <img className="thumbnail" src={product.picture} />
        </div>
        <p className="category">{product.category}</p>
        <h1 className="name">{product.name}</h1>
        {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
        <p className="price">${product.default_price}</p>
        {/* TODO: handle sale prices */}
        <div>Star Component</div>
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
        <p className="category">{product.category}</p>
        <h1 className="name">{product.name}</h1>
        {/* TODO: visual bussiness document shows "expanded product name with extra text" */}
        <p className="price">${product.default_price}</p>
        {/* TODO: handle sale prices */}
        <div>Star Component</div>
      </div>
    )
  }
  if (type === 'AddOutfit') {
    return (
      <div className="card">
        <h1>Add To Outfit</h1>
        <button>+++</button>
      </div>
    )
  }
}

export default Card;