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
`

const NoMore = styled.div`
  border: 1px solid black;
`

const Wrapper = (props) => {
  //TODO: REMOVE WHEN YOU GET APPROPRIATE DATA
  const dummyData = {
    "id": 37335,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
}
  const product = props.product || dummyData;
  const [allQuestions, setAllQuestions] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [searchQuestions, setSearchQuestions] = useState();
  const [isSearched, setSearched] = useState(false);
  const [wantsMore, setWantsMore] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [requestCount, setRequestCount] = useState(1);
  const [count, setCount] = useState(20);
  const [page, setPage] = useState(1);
  const [noMore, setNoMore] = useState(false);



  useEffect(() => {
    console.log('this is the prop', props)
    setPage(1);
    const fetchQuestions = async () => {
      const questions = await axios.get('/questions/all', {params: {productID: product.id, count: count, page: page}});
      console.log(questions.data);
      if (questions.data.length === 0) {
        setNoMore(true);
      }
        setAllQuestions(questions.data);
        //error
        setDisplayQuestions(questions.data.slice(0,4));

      // setAllQuestions(questions.data);
      // setDisplayQuestions(questions.data.slice(0, 4))
    }
    fetchQuestions().catch(console.error)
  }, [props]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('/questions/all', {params: {productID: product.id, count: count, page: page}});
      console.log(questions.data);
      if (questions.data.length === 0) {
        setNoMore(true);
      } else {
        setAllQuestions([...allQuestions, ...questions.data]);
        //error
        setDisplayQuestions([...displayQuestions, ...questions.data.slice(0,4)]);
      }
      // setAllQuestions(questions.data);
      // setDisplayQuestions(questions.data.slice(0, 4))
    }
    fetchQuestions().catch(console.error)
  }, [page]);

  const handleMoreClick = (e) => {
    setRequestCount(requestCount + 1);
    // setWantsMore(true);
    if (allQuestions.length !== displayQuestions.length) {
      let addedDisplay = allQuestions.slice(displayQuestions.length, displayQuestions.length + 4);
      setDisplayQuestions([...displayQuestions, ...addedDisplay]);
    } else {
      // setCount(count + 4);
      setPage(page + 1);
      // fetchQuestions().catch(console.error);
    }


  }
  const handleAddQuestion = () => {
    setAddQuestion(true);
  }

  return (
    <div id='faq'>

    <FAQWrapper >
      <Title>Q&A</Title>
      <Search questions={displayQuestions} setSearchQuestions= {setSearchQuestions} setSearched={setSearched}/>
      {/* render either searched questions or questions for product */}
      <Main>
      {allQuestions.length > 0 && <QuestionDisplay questions={isSearched ? searchQuestions : displayQuestions } wantsMore = {requestCount} product={product}/>}
      {/* //TODO:Change the name when clicked to be less answered questions */}
      {noMore && <NoMore>No More Questions Available</NoMore>}
      {addQuestion && <QuestionModal name={product.name} productId={product.id} setAddQuestion={setAddQuestion} />}
    </Main>
      <Buttons>
      {allQuestions.length > 0 || allQuestions.length === displayQuestions.length && <Button data-testid="more questions button" onClick ={handleMoreClick}>MORE ANSWERED QUESTIONS</Button>}
      <Button onClick={handleAddQuestion}>ADD A QUESTION + </Button>
      </Buttons>
    </FAQWrapper>
    </div>
  )
}

export default Wrapper;