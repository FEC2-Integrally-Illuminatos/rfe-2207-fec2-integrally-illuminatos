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
  // console.log(metadata)
  return (
    <div>
      ProductInfoComponent
      {/* <div>
        Size
        <div>
        <RatingProdInfoSize characteristics={metadata.characteristics}/>
        </div>
      </div> */}
      {/* <div>
        Width
        <div>
        <RatingProdInfoWidth characteristics={metadata.characteristics}/>
        </div>
      </div> */}
      <div>
        Comfort
        <div>
        <RatingProdInfoComfort characteristics={metadata.characteristics}/>
        </div>
      </div>
      <div>
        Quality
        <div>
        <RatingProdInfoQuality characteristics={metadata.characteristics}/>
        </div>
      </div>
      <div>
        Length
        <div>
        <RatingProdInfoLength characteristics={metadata.characteristics}/>
        </div>
      </div>
      <div>
        Fit
        <div>
        <RatingProdInfoFit characteristics={metadata.characteristics}/>
        </div>
      </div>
    </div>
  );
};
export default RatingProdInfo;
