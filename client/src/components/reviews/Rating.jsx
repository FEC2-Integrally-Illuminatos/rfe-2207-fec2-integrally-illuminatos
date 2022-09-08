import React from "react";
import styled from "styled-components";
import StarBar from "./StarBar.jsx";

var Rating = function (props) {
  console.log(props);
  const { FilterFunc } = props;
  const ratings = props.metadata.ratings;
  const vals = Object.values(ratings);
  const total = vals.reduce((a, b) => Number(a) + Number(b));

  const StarRating = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
  `;
  const TestRiver = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
  `;

  // return (null)
  return (
    <div>
      <div></div>
      <div>
        FILTER BY REVIEWS
        <TestRiver id="text" onClick={() => FilterFunc(5)}>
          <div>5 Stars: ({ratings["5"]})</div>
          <StarBar starCount={ratings["5"]} total={total} />
        </TestRiver>
        <TestRiver id="text" onClick={() => FilterFunc(4)}>
          4 Stars: ({ratings["4"]}){" "}
          <StarBar starCount={ratings["5"]} total={total} />
        </TestRiver>
        <TestRiver id="text" onClick={() => FilterFunc(3)}>
          3 Stars: ({ratings["3"]}){" "}
          <StarBar starCount={ratings["3"]} total={total} />
        </TestRiver>
        <TestRiver id="text" onClick={() => FilterFunc(2)}>
          2 Stars: ({ratings["2"]}){" "}
          <StarBar starCount={ratings["2"]} total={total} />
        </TestRiver>
        <TestRiver id="text" onClick={() => FlterFunc(1)}>
          1 Star: ({ratings["1"]}){" "}
          <StarBar starCount={ratings["5"]} total={total} />
        </TestRiver>
      </div>
    </div>
  );
};

export default Rating;
