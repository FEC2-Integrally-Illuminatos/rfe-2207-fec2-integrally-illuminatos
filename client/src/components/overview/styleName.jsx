import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
  font-size: 16px;
  margin-top: 6%;
  margin-bottom: 10%;
  font-family: 'Yeseva One', cursive;

`

const StyleName = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);


    return (
      <div>
        <StyleDiv>Style > {style.name}</StyleDiv>
      </div>
    );
}

export default StyleName;