import React from 'react';
import Carousel from 'better-react-carousel';
import Card from './Card.jsx'
import axios from 'axios';

const ProductList = ({relatedProducts}) => {

  console.log('related products on the product list', relatedProducts);
  return (
    <Carousel cols={3} rows={1} gap={2} loop>
      {relatedProducts.map((product) => {
        return (
        <Carousel.Item key={product.id}>
          <Card type="Product" product={product}/>
        </Carousel.Item>
        );
      })}
      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
  )
}

export default ProductList;