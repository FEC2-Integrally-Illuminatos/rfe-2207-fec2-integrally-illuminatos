import React, {useState} from 'react';
import AnswerModal from './AnswerModal.jsx';

export default function AddAnswer({product, question, questionId}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <span onClick={() => setIsOpen(true)}><u>Add Answer</u></span>
     {isOpen && <AnswerModal setIsOpen={setIsOpen} name={product.name} question={question} questionId={questionId}/> }
    </>
  )
}