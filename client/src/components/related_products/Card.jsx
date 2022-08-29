import React from 'react';

const Card = ({type, product}) => {
  console.log('product in card view', product)
  if (type === 'Product') {
    return (
      <div className="card">
        <button className="star">*</button>
        <img width="100%" src={product.picture} />
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
      <div className="card">
        <button className="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
        <p className="category">Category</p>
        <h1 className="name">Expanded Product Name With Extra Text</h1>
        <p className="price">$123</p>
        <div>Star Component</div>
      </div>
    )
  }
}

export default Card;