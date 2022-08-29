import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionDisplay from './QuestionDisplay.jsx';
import Search from './Search.jsx';

const Wrapper = (props) => {
  const product = props.product || 37331;
  const [allQuestions, setAllQuestions] = useState([]);
  const [searchQuestions, setSearchQuestions] = useState();
  const [isSearched, setSearched] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('/qa/questions/all', {params: {productID: product}});
      console.log(questions.data);
      setAllQuestions(questions.data.results);
    }
    fetchQuestions().catch(console.error)
  }, []);

  return (
    <div>
      <Search questions={allQuestions} setSearchQuestions= {setSearchQuestions} setSearched={setSearched}/>
      {/* render either searched questions or questions for product */}
      <QuestionDisplay questions={isSearched ? searchedQuestions : allQuestions }/>
    </div>
  )
}

export default Wrapper;