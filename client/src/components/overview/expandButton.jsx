import React, {useState, useEffect} from 'react';
import FullscreenModal from './fullscreenModal.jsx';
import { MdFullscreen} from 'react-icons/md';
import styled from 'styled-components';


const StyledButton = styled(MdFullscreen)`
  color: gray;
  font-size: 55px;
  &:hover {
    font-size: 60px;
    color: white;
  }
`

export default function ExpandButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div>
      <StyledButton onClick={() => setIsOpen(true)}/>
      {isOpen && <FullscreenModal length={props.length} setIsOpen={setIsOpen} handleBackClick={props.handleBackClick} handleNextClick={props.handleNextClick} setCurrent={props.setCurrent} current={props.current} product={props.product} style={props.style}/> }
    </div>
  )
}