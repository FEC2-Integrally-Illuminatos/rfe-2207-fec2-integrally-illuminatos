import React from 'react';
import Carousel from 'better-react-carousel';
import Card from './Card.jsx';


const OutfitList = () => {
  return (
    <Carousel cols={3} rows={1} gap={20} loop>
      <Carousel.Item>
        <Card type="AddOutfit"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Outfit"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Outfit"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Outfit"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Outfit"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card type="Outfit"/>
      </Carousel.Item>
    </Carousel>
  )
}

export default OutfitList;