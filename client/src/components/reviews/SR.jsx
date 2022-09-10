import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

var SR = function (props) {

  let {rating, totalCount} = props;

  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starSpacing={"0.1px"}
        starDimension={"30px"}
      />
    </div>
  );
};

export default SR;
