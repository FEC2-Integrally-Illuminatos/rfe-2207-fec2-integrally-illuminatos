// import RatingItems from './Rating.jsx';
import React from "react";
import styled from 'styled-components';


var RatingProdInfoLength = function (props) {
  const {characteristics} = props;
  const num = characteristics.Length.value;
  const pointer = num/5;
  //console.log(pointer);
  return (
    <div>
      <TotalBar>
      <div class="Length">
        <GreenBar>
          <div class="col1">&nbsp;</div>
          </GreenBar>
        <GrayBar>
        <div class="col2">&nbsp;</div>
        </GrayBar>
      </div>
      </TotalBar>
      <Triangle>
      <div>&nbsp;</div>
      </Triangle>
    </div>
  );
};

const TotalBar = styled.div`
  width: 50%;
`

const GreenBar = styled.div`
  display: inline-block;
  width: 15%;
  height: 100%;
  margin: 0;
    padding: 0;
  background: #66FF99;
`
const GrayBar = styled.div`
  display: inline-block;
  width: 85%;
  height: 100%;
  margin: 0;
    padding: 0;
  background: #A9A9A9;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #555;
`

export default RatingProdInfoLength;

