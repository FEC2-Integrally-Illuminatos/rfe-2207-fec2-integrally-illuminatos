// import RatingItems from './Rating.jsx';
import React from "react";
import styled from 'styled-components';
var BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5px;
  width: 50%;
`;
var CenterText = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`
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
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #555;
  margin-left: ${(props) => Number(props.num)/5*100}%

`;
var RatingProdInfoWidth = function (props) {
  const {characteristics} = props;
  const num = characteristics.Width.value;

  return (
    <div>
      <CenterText>Width</CenterText>
      <BarContainer>
        <ShortContainer>&nbsp;</ShortContainer>
        <LongContainer>&nbsp;</LongContainer>
        <ShortContainer>&nbsp;</ShortContainer>
      </BarContainer>
      <BarContainer>
      <Triangle num={num}>&nbsp;</Triangle>
      </BarContainer>
      <BottomContainer>
        <LeftText>Narrow</LeftText>
        <RightText>Wide</RightText>
      </BottomContainer>
    </div>
  );
};



export default RatingProdInfoWidth;

