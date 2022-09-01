// import RatingItems from './Rating.jsx';
import React from "react";
import RatingProdInfoSize from "./RatingProdInfoSize.jsx";
import RatingProdInfoComfort from "./RatingProdInfoComfort.jsx";
var RatingProdInfo = function (props) {
  const { metadata } = props;
  // console.log(metadata)
  return (
    <div>
      ProductInfoComponent
      <div>
        Size
        <div>
          <input type="range" min="1" max="10" value="5" />
        </div>
        <RatingProdInfoSize />
      </div>
      <div>
        Comfort
        <div>
          <input type="range" min="1" max="10" value="6" />
        </div>
        <RatingProdInfoComfort />
      </div>
    </div>
  );
};
export default RatingProdInfo;
