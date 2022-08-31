import React, {useState, useEffect } from 'react';
import {SearchWrapper} from './styles/Search.styled.js';
import styled from 'styled-components';

const Form = styled.form`
  min-width: 15em;
  display: flex;
  align-items: center;
  margin: auto 2%;
`

const Input = styled.input`
  flex-grow: 1;
  padding: .4rem;
`


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
    <SearchWrapper>
    <Form>
      <Input type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange}></Input>
    </Form>
    </SearchWrapper>
  )
}

export default Search;