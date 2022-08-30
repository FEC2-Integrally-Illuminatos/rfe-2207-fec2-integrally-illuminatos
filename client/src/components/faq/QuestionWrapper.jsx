import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionDisplay from './QuestionDisplay.jsx';
import Search from './Search.jsx';

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
  const [searchQuestions, setSearchQuestions] = useState();
  const [isSearched, setSearched] = useState(false);
  const [wantsMore, setWantsMore] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('/qa/questions/all', {params: {productID: product.id}});
      let result = questions.data.results.slice(0, 4).sort((a, b) => {
       return b['question_helpfulness'] - a['question_helpfulness']
      });
      setAllQuestions(result);
    }
    fetchQuestions().catch(console.error)
  }, []);

  const handleMoreClick = (e) => {
    setWantsMore(!wantsMore)
    const fetchQuestions = async () => {
      const questions = await axios.get('/qa/questions/all', {params: {productID: product.id}});
      let result = questions.data.results.sort((a, b) => {
       return b['question_helpfulness'] - a['question_helpfulness']
      });
      setAllQuestions(result);
    }
    fetchQuestions().catch(console.error)
  }

  return (
    <div>
      <Search questions={allQuestions} setSearchQuestions= {setSearchQuestions} setSearched={setSearched}/>
      {/* render either searched questions or questions for product */}
      {allQuestions.length > 0 && <QuestionDisplay questions={isSearched ? searchQuestions : allQuestions } wantsMore = {wantsMore} product={product}/>}
      <button onClick ={handleMoreClick}>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION + </button>
    </div>
  )
}

export default Wrapper;