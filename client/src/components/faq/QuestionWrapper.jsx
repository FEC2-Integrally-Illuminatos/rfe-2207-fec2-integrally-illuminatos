import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionDisplay from './QuestionDisplay.jsx';
import Search from './Search.jsx';
import QuestionModal from './QuestionModal.jsx';
import styled from 'styled-components';
import {FAQWrapper} from './styles/FAQWrapper.styled.js';
import {Main} from './styles/Main.styled.js';
import {Buttons} from './styles/Buttons.styled.js';
import {Title} from './styles/title.styled.js';


const Button = styled.button`
  margin: 0.5% 1% 1% 0.5%;
  height: 3rem;
  padding: 10px;
  background-color: #E98074;
  border-radius: 6px;
  border-color: transparent;
  cursor: pointer;
`

const Wrapper = (props) => {

  const product = props.product;
  const [allQuestions, setAllQuestions] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [searchQuestions, setSearchQuestions] = useState();
  const [isSearched, setSearched] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('/questions/all', {params: {productID: product.id}});
        setAllQuestions(questions.data);
        setDisplayQuestions(questions.data.slice(0,4));
    }
    fetchQuestions().catch(console.error)
  }, [props]);

  const handleMoreClick = (e) => {
    if (allQuestions.length !== displayQuestions.length) {
      let addedDisplay = allQuestions.slice(displayQuestions.length, displayQuestions.length + 2);
      setDisplayQuestions([...displayQuestions, ...addedDisplay]);
    }
  }
  const handleAddQuestion = () => {
    setAddQuestion(true);
  }

  return (
    <div id='faq' data-testid='questionWrapper'>
    <FAQWrapper >
      <Title>Q&A</Title>
      <Search questions={displayQuestions} setSearchQuestions= {setSearchQuestions} setSearched={setSearched}/>
      <Main>
      {allQuestions.length > 0 && <QuestionDisplay questions={isSearched ? searchQuestions : displayQuestions } product={product}/>}
      {addQuestion && <QuestionModal name={product.name} productId={product.id} setAddQuestion={setAddQuestion} />}
    </Main>
      <Buttons>
      {allQuestions.length > 0 && allQuestions.length !== displayQuestions.length && <Button data-testid="more-questions-button" onClick ={handleMoreClick}>MORE ANSWERED QUESTIONS</Button>}
      <Button onClick={handleAddQuestion}>ADD A QUESTION + </Button>
      </Buttons>
    </FAQWrapper>
    </div>
  )
}

export default Wrapper;