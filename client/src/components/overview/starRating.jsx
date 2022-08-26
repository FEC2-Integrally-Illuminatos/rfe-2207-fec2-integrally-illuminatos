import React from 'react';
import StarRatings from 'react-star-ratings';



const StarRating = (props) => {
//if it has reviews
  return (
    <div>
      <StarRatings
        rating={3.5}
        starRatedColor="gold"
        numberOfStars={5}
        name='rating'
        starSpacing={'1px'}
        starDimension={'25px'}
      />&nbsp;&nbsp;
      <a href=''>Read all 10 reviews</a>
    </div>
  );
}


export default StarRating;