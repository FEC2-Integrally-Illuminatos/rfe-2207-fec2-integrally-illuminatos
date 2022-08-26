import React from 'react';
import Carousel from 'better-react-carousel';
import Card from './Card.jsx'

const ProductList = () => {
  return (
    <Carousel cols={3} rows={1} gap={2} loop>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Product"/>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductList;