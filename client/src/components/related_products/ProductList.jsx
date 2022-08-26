import React from 'react';
import Carousel from 'better-react-carousel';

const ProductList = () => {
  return (
    <Carousel cols={3} rows={1} gap={2} loop>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=4" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=5" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="star">*</button>
        <img width="100%" src="https://picsum.photos/800/600?random=6" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductList;