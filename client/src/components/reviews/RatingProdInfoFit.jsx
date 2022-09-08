// import RatingItems from './Rating.jsx';
import React from "react";
import styled from 'styled-components';
import { CenterText } from "./styles/CenterText.js";

var BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5px;
  width: 50%;
`;
var LeftText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
`;
var RightText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
`;
var BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

var ShortContainer = styled.div`
  background: red;
  display: flex;
  flex-grow: 1;
`;
var LongContainer = styled.div`
  background: red;
  display: flex;
  flex-grow: 2;
  border-right: 5px solid black;
  border-left: 5px solid black;
`;
var Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #555;
`;
var RatingProdInfoFit = function (props) {

  const {characteristics} = props;
  const num = characteristics.Fit.value;
  const pointer = num/5;
  //console.log(pointer);
  return (
    <div>
      <CenterText>Comfort</CenterText>
      <BarContainer>
        <ShortContainer>&nbsp;</ShortContainer>
        <LongContainer>&nbsp;</LongContainer>
        <ShortContainer>&nbsp;</ShortContainer>
      </BarContainer>
      <BottomContainer>
        <LeftText>Uncomfortable</LeftText>
        <RightText>Perfect</RightText>
      </BottomContainer>
    </div>
  );
};

export default RatingProdInfoFit;

