// import RatingItems from './Rating.jsx';
import React from "react";
import styled from "styled-components";

const TotalBar = styled.div`
  width: 150px;
  height: 10px;
  align-items: center;
  display: flex;
`;

const GoldBar = styled.div`
  width: ${(props) => props.FillTo}%;
  height: 50%;
  margin: 0;
  padding: 0;
  background: #ffd700;
`;

const GrayBar = styled.div`
  width: ${(props) => props.LeaveTo}%;
  height: 50%;
  margin: 0;
  padding: 0;
  background: #a9a9a9;
`;
var StarBar = function (props) {
  // console.log(props);
  const { starCount, total } = props;
  const FillTo = (Number(starCount) / total) * 100;
  const LeaveTo = 100 - FillTo;
  // console.log(FillTo, LeaveTo);


  return (
    <div>
      <TotalBar>
        <GoldBar FillTo={FillTo}>&nbsp;</GoldBar>
        <GrayBar LeaveTo={LeaveTo}>&nbsp;</GrayBar>
      </TotalBar>
    </div>
  );
};


export default StarBar;
