import React, {useState, useEffect} from 'react';
import Answers from './AnswerDisplay.jsx';
import axios from 'axios';

export default function IndividualQ ({question, questionID, wantsMore}) {
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
      Q: {question}
      {<Answers answers={allAnswers} wantsMore={wantsMore}/>}
      <br></br>
    </div>
  )
}