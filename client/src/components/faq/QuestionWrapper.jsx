import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionDisplay from './QuestionDisplay.jsx';
import Search from './Search.jsx';
import QuestionModal from './QuestionModal.jsx';
import styled from 'styled-components';
import {FAQWrapper} from './styles/FAQWrapper.styled.js';
import {Main} from './styles/Main.styled.js';
import {Buttons} from './styles/Buttons.styled.js';


const Button = styled.button`
  margin: 1% 15% 1% 20%;
  height: 3rem;
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



  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('/qa/questions/all', {params: {productID: product.id, count: count}});
      let result = questions.data.results.sort((a, b) => {
        return b['question_helpfulness'] - a['question_helpfulness']
      });
      setAllQuestions(result);
      setDisplayQuestions(result.slice(0, 4))
    }
    fetchQuestions().catch(console.error)
  }, []);

  const handleMoreClick = (e) => {
    setRequestCount(requestCount + 1);
    // setWantsMore(true);
    if (allQuestions.length !== count) {
      setDisplayQuestions(allQuestions.slice(0, (4 * requestCount )));
    } else {
      setCount(count + 4);
      const fetchQuestions = async () => {
        const questions = await axios.get('/qa/questions/all', {params: {productID: product.id, count: count}});
        let result = questions.data.results.sort((a, b) => {
          return b['question_helpfulness'] - a['question_helpfulness']
        });
        setAllQuestions(result);
        setDisplayQuestions(result);
      }
      fetchQuestions().catch(console.error);
    }


  }
  const handleAddQuestion = () => {
    setAddQuestion(!addQuestion);
  }

  return (
    <>
      <Search questions={displayQuestions} setSearchQuestions= {setSearchQuestions} setSearched={setSearched}/>
      {/* render either searched questions or questions for product */}
      <Main>
      {allQuestions.length > 0 && <QuestionDisplay questions={isSearched ? searchQuestions : displayQuestions } wantsMore = {wantsMore} product={product}/>}
      {/* //TODO:Change the name when clicked to be less answered questions */}
      {addQuestion && <QuestionModal name={product.name} productId={product.id} />}
    </Main>
      <Buttons>
      <Button onClick ={handleMoreClick}>MORE ANSWERED QUESTIONS</Button>
      <Button onClick={handleAddQuestion}>ADD A QUESTION + </Button>
      </Buttons>
    </>
  )
}

export default Wrapper;