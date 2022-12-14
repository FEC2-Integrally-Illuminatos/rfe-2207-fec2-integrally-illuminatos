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

var RatingProdInfoSize = function (props) {
  const {characteristics} = props;
  //console.log(props)
  const num = characteristics.Size.value;

  return (
    <div>
      <CenterText>Size</CenterText>
      <BarContainer>
        <ShortContainer>&nbsp;</ShortContainer>
        <LongContainer>&nbsp;</LongContainer>
        <ShortContainer>&nbsp;</ShortContainer>
      </BarContainer>
      <BarContainer>
      <Triangle num={num}>&nbsp;</Triangle>
      </BarContainer>
      <BottomContainer>
        <LeftText>Small</LeftText>
        <RightText>Big</RightText>
      </BottomContainer>
    </div>
  );
};

const TotalBar = styled.div`
  width: 50%;
`

// const GreenBar = styled.div`
//   display: inline-block;
//   width: 15%;
//   height: 100%;
//   margin: 0;
//     padding: 0;
//   background: #66FF99;
// `
// const GrayBar = styled.div`
//   display: inline-block;
//   width: 85%;
//   height: 100%;
//   margin: 0;
//     padding: 0;
//   background: #A9A9A9;
// `
// const Triangle = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-bottom: 20px solid #555;
// `

export default RatingProdInfoSize;

