import React, {useState, useEffect} from 'react';
import Answers from './AnswerDisplay.jsx';
import Helpful from './Helpful.jsx';
import axios from 'axios';

export default function IndividualQ ({question, questionID, wantsMore, count}) {
  question = question.includes('?') ? question : question +='?';
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const answers = await axios.get(`qa/questions/${questionID}`);
      console.log(answers.data);
      setAllAnswers(answers.data.results);
    }
    fetchAnswers().catch(console.error)
  }, [])

  return (
    <div>
      Q: {question} <Helpful questionId={questionID} count={count}/>
      {<Answers answers={allAnswers} wantsMore={wantsMore}/>}
      <br></br>
    </div>
  )
}