import React, {useState} from 'react';
import Modal from './Modal.jsx';

export default function AddAnswer({product, question}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <span onClick={() => setIsOpen(true)}><u>Add Answer</u></span>
     {isOpen && <Modal setIsOpen={setIsOpen} name={product.name} question={question}/> }
    </>
  )
}