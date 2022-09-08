// import RatingItems from './Rating.jsx';
import React from "react";
import RatingProdInfoSize from "./RatingProdInfoSize.jsx";
import RatingProdInfoComfort from "./RatingProdInfoComfort.jsx";
import RatingProdInfoQuality from "./RatingProdInfoQuality.jsx";
import RatingProdInfoWidth from "./RatingProdInfoWidth.jsx";
import RatingProdInfoLength from "./RatingProdInfoLength.jsx";
import RatingProdInfoFit from "./RatingProdInfoFit.jsx";
var RatingProdInfo = function (props) {
  const { metadata } = props;
  const { characteristics } = metadata;

  return (
    <div>
      CHARACTERISTICS!
      {characteristics.Size === undefined ? null : (
        <div>
          Size
          <RatingProdInfoSize characteristics={metadata.characteristics} />
        </div>
      )}
      {characteristics.Width === undefined ? null : (
        <div>
          Width
          <RatingProdInfoWidth characteristics={metadata.characteristics} />
        </div>
      )}
      {characteristics.Comfort === undefined ? null : (
        <div>
          Comfort
          <RatingProdInfoComfort characteristics={metadata.characteristics} />
        </div>
      )}
      {characteristics.Quality === undefined ? null : (
        <div>
          Quality
          <RatingProdInfoQuality characteristics={metadata.characteristics} />
        </div>
      )}
      {characteristics.Length === undefined ? null : (
        <div>
          Length
          <RatingProdInfoLength characteristics={metadata.characteristics} />
        </div>
      )}
      {characteristics.Fit === undefined ? null : (
        <div>
          Fit
          <RatingProdInfoFit characteristics={metadata.characteristics} />
        </div>
      )}
    </div>
  );
};
export default RatingProdInfo;
