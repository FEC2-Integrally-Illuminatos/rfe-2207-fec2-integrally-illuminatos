import React, {useState, useEffect } from 'react';
import {SearchWrapper} from './styles/Search.styled.js';
import styled from 'styled-components';

const Form = styled.form`
  min-width: 15em;
  display: flex;
  align-items: center;
  margin: auto 2%;
  flex-grow: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  flex-grow: 1;
  padding: 1%;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 99%;
`

const Search = ({questions, setSearchQuestions, setSearched}) => {
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
      setSearched(false);
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