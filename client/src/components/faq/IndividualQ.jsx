import React, {useState, useEffect} from 'react';
import Answers from './AnswerDisplay.jsx';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';

export default function IndividualQ ({question, questionID, wantsMore, count, product}) {
  question = question.includes('?') ? question : question +='?';
  const [allAnswers, setAllAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    const fetchAnswers = async () => {
      const answers = await axios.get(`qa/questions/${questionID}`);
      // console.log(answers.data);
      // setAllAnswers(answers.data.results);
      let result = answers.data.results.sort((a, b) => {
        return b.helpfulness - a.helpfulness
       });
       setAllAnswers(result);
    }
    fetchAnswers().catch(console.error)
  }, [])

  return (
    <div onClick={() => {setShowAnswers(!showAnswers)}}>
      Q: {question} <Helpful questionId={questionID} count={count}/> |
      <AddAnswer question={question} product={product} questionId={questionID}/>
      {showAnswers && <Answers answers={allAnswers} wantsMore={wantsMore} showAnswers={showAnswers}/>}
      <br></br>
    </div>
  )
}