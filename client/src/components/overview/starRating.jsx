import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';



const StarRating = (props) => {
  const [product, setProduct] = useState(props);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setProduct(props);
    if (Object.keys(props).length > 0) { //calculate and set rating if there are ratings, rounded to nearest quarter of a point
      let totalReviews = 0;
      let sum = 0;
      for (let key in props.ratings) {
        totalReviews += parseInt(props.ratings[key]);
        sum += (parseInt(key) * parseInt(props.ratings[key]));
      }
      let tempRating = sum / totalReviews;
      let wholeDigit = Math.floor(tempRating);
      let decimal = tempRating - wholeDigit;
      if (decimal >= 0 && decimal < 0.25) {
        setRating(wholeDigit);
      } else if (decimal >= 0.25 && decimal < 0.5) {
        setRating(wholeDigit + 0.25);
      } else if (decimal >= 0.5 && decimal < 0.75) {
        setRating(wholeDigit + 0.5);
      } else if (decimal >= 0.75 && decimal < 1) {
        setRating(wholeDigit + 0.75);
      }
    }
  }, [props]);

  const handleClick = (e) => {
    let offsetTop = document.getElementById(e).offsetTop;
    window.scrollTo({
      top: offsetTop-100,
      behavior: "smooth"
    });
  };

  if (rating === 0) {
    return (
      <div></div>
    );
    } else {
      return (
        <div>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            starSpacing={'1px'}
            starDimension={'25px'}
            />&nbsp;&nbsp;
          <a onClick={() => {handleClick('gohere');}}>Read all 10 reviews</a>
        </div>
        );
    }
}


export default StarRating;