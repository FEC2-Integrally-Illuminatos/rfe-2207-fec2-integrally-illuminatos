// import RatingItems from './Rating.jsx';
import React from "react";
import styled from "styled-components";

var StarBar = function (props) {

  console.log(props);
  const { starCount, total } = props;
  const FillTo = (Number(starCount) / total) * 100;
  const LeaveTo = 100 - FillTo;
  console.log(FillTo, LeaveTo);

  const TotalBar = styled.div`
    width: 150px;
    height: 10px;
    align-items: center;
    display: flex;
  `;

  const GoldBar = styled.div`
    width: ${FillTo}%;
    height: 50%;
    margin: 0;
    padding: 0;
    background: #ffd700;
  `;
  const GrayBar = styled.div`
    width: ${LeaveTo}%;
    height: 50%;
    margin: 0;
    padding: 0;
    background: #a9a9a9;
  `;

  return (
    <div>
      <TotalBar>
        <GoldBar>&nbsp;</GoldBar>
        <GrayBar>&nbsp;</GrayBar>
      </TotalBar>
    </div>
  );
};

// const TotalBar = styled.div`
//   width: 400px;
//   display: flex;

// `;

// const GoldBar = styled.div`
//   width: ${FillTo2}%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   background: #ffd700;
// `;
// const GrayBar = styled.div`
//   width: ${LeaveTo2}%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   background: #a9a9a9;
// `;

export default StarBar;
