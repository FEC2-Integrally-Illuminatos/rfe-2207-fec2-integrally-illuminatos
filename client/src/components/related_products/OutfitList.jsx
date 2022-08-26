import React from 'react';
import Carousel from 'better-react-carousel';


const OutfitList = () => {
  return (
    <Carousel cols={3} rows={1} gap={2} loop>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=7" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=8" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=9" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=10" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=11" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
      <Carousel.Item>
        <button class="remove">x</button>
        <img width="100%" src="https://picsum.photos/800/600?random=12" />
        <p class="category">Category</p>
        <h1 class="name">Expanded Product Name With Extra Text</h1>
        <p class="price">$123</p>
        <div>Star Component</div>
      </Carousel.Item>
    </Carousel>
  )
}

export default OutfitList;