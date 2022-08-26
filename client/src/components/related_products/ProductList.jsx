import React from 'react';
import Carousel from 'better-react-carousel';

const ProductList = () => {
  return (
    <Carousel cols={2} rows={1} gap={2} loop>
      <Carousel.Item>
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductList;