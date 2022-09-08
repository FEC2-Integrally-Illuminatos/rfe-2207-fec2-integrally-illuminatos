import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ThumbBox = styled.div`
  border: ${props => props.selected ? "3px solid #E98074" : "0.01px solid grey"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: no-repeat center center;
  float: left;
  background-image: url(${(props => props.link)});
  background-size: cover;
  height: 0;
  padding-bottom: 14%;
  width: 14%;
  margin: 1px;
  &:hover {
    cursor: pointer;
  };
`

const GalleryThumbnail = (props) => {
  const [thumbnail, setThumbnail] = useState(props.thumbnail);
  const [active, setActive] = useState(() => {
    if (props.index === props.current) {
      return true;
    } else {
      return false;
    };
  });


  useEffect(() => {
    setThumbnail(props.thumbnail);
    if (props.index === props.current) {
      setActive(true);
    } else {
      setActive(false);
    };
  }, [props]);

  const handleClick = (e) => {
    props.handleThumbClick(props.index);
    e.stopPropagation();
  };

  const photoSetter = (item) => {
    if (item === undefined) {
      return 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
    } else {
      return item;
    }
  };

  return (
    <ThumbBox selected={active} link={photoSetter(thumbnail)} onClick={(e) => {handleClick(e);}}/>
  );
}


export default GalleryThumbnail;