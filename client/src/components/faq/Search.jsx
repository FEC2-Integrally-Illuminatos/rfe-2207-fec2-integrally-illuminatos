import React, {useState, useEffect } from 'react';

const Search = ({questions, setSearchQuestions, setSearched}) => {
  //TODO: The search filter should work with any other filters or sorts that have been applied, and narrow the results further. Changes to the sort and rating filters should not remove the search term filter.
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    if (searchTerm.length >= 3) {
      setSearched(true)
      let filtered = questions.filter((question) => {
        if (question['question_body'].toLowerCase().includes(searchTerm.toLowerCase())) {
          return question
        }
      })
      setSearchQuestions(filtered);
    } else {
      setSearchQuestions(questions);
    }
  }, [searchTerm]);


  return (
    <form>
      <input type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange}></input>
    </form>
  )
}

export default Search;