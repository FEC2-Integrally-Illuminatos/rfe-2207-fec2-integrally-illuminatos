import React, { useState, useEffect } from 'react';
import Detail from './detail.jsx';
import styled from 'styled-components';

const MetaDiv = styled.div`
  width: 100%;
  margin-top: 3%
  margin-bottom: 3%;
  font-family: 'Yeseva One', cursive;
`



const MetaInfo = (props) => {

  return (
    <div>
      {props.product.features.map((detail, key) => {
        return <Detail detail={detail} key={key}/>
      })}
    </div>
  );
}

export default MetaInfo;