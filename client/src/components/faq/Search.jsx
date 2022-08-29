import React, {useState, useEffect } from 'react';

const Search = ({allQuestions, setSearchQuestions, setSearched}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    if (searchTerm.length >= 3) {
      setSearched(true)
      let filtered = allQuestions.filter((question) => {
        if (question['question_body'].toLowerCase().includes(searchTerm.toLowerCase())) {
          return question
        }
      })
      setSearchQuestions(filtered);
    }
  }, [searchTerm]);


  return (
    <form>
      <input type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange}></input>
    </form>
  )
}

export default Search;