import RatingItems from "./Rating.jsx";
import React from "react";
var Rating = function (props) {
  // console.log(props)
  const { FilterFunc } = props;
  // return (null)
  return (
    <div>
      <div>

      </div>
      <div>
        FILTER BY REVIEWS
        <div id="text" onClick={() => FilterFunc(5)}>
          ★★★★★
        </div>
        <div id="text" onClick={() => FilterFunc(4)}>
          {" "}
          ★★★★☆{" "}
        </div>
        <div id="text" onClick={() => FilterFunc(3)}>
          {" "}
          ★★★☆☆{" "}
        </div>
        <div id="text" onClick={() => FilterFunc(2)}>
          {" "}
          ★★☆☆☆{" "}
        </div>
        <div id="text" onClick={() => FlterFunc(1)}>
          {" "}
          ★☆☆☆☆{" "}
        </div>
      </div>
    </div>
  );
};
export default Rating;
