// import RatingItems from './Rating.jsx';
import React from "react";
import styled from "styled-components";
var FillTo;
var LeaveTo;

var StarBar = function (props) {
  //console.log(props);
  const {starCount, total} = props;
  FillTo = (Number(starCount) / total)*100;
  LeaveTo = 100-FillTo;
  console.log(FillTo, LeaveTo)
  return (
    <div>
      <TotalBar>
        <div class="totalbar">
          <GoldBar>
            <div class="gold">&nbsp;</div>
          </GoldBar>
          <GrayBar>
            <div class="gray">&nbsp;</div>
          </GrayBar>
        </div>
      </TotalBar>
    </div>
  );
};

const TotalBar = styled.div`
  width: 500px;
`;

const GoldBar = styled.div`
  display: inline-block;
  width: ${FillTo}%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #FFD700;
`;
const GrayBar = styled.div`
  display: inline-block;
  width: ${LeaveTo}%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #a9a9a9;
`;

export default StarBar;
