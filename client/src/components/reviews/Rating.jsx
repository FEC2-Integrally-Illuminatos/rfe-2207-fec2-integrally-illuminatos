import React from "react";
import styled from "styled-components";
import StarBar from "./StarBar.jsx";
const StarRating = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
`;
const StarDetail = styled.div`
  display: flex;
  justify-content: flex-start space-evenly;
  font-size: 15px
`;
//grid-template-columns: 1fr 7fr;
// display: grid;
var Rating = function (props) {
  // console.log(props);
  const { FilterFunc } = props;
  const ratings = props.metadata.ratings;
  const vals = Object.values(ratings);
  const total = vals.reduce((a, b) => Number(a) + Number(b));
  // return (null)
  return (
    <div>
      <div></div>
      <div>
        FILTER BY REVIEWS
        <StarDetail id="text" onClick={() => FilterFunc(5)}>
          <div>5 Stars: ({ratings["5"]})</div>
          <StarBar starCount={ratings["5"]} total={total} />
        </StarDetail>
        <StarDetail id="text" onClick={() => FilterFunc(4)}>
          4 Stars: ({ratings["4"]}){" "}
          <StarBar starCount={ratings["5"]} total={total} />
        </StarDetail>
        <StarDetail id="text" onClick={() => FilterFunc(3)}>
          3 Stars: ({ratings["3"]}){" "}
          <StarBar starCount={ratings["3"]} total={total} />
        </StarDetail>
        <StarDetail id="text" onClick={() => FilterFunc(2)}>
          2 Stars: ({ratings["2"]}){" "}
          <StarBar starCount={ratings["2"]} total={total} />
        </StarDetail>
        <StarDetail id="text" onClick={() => FilterFunc(1)}>
          1 Star: ({ratings["1"]}){" "}
          <StarBar starCount={ratings["5"]} total={total} />
        </StarDetail>
      </div>
    </div>
  );
};

export default Rating;
