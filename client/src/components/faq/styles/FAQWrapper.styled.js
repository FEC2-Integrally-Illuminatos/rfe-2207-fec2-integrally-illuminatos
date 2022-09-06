import styled from 'styled-components';

export const FAQWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 0.6fr 0.2fr;
  grid-template-areas:
    "title search search search"
    "main main main main"
    "buttons buttons buttons buttons";
  background-color: #F2F1EF;
  max-height: 100vh;

`

//TODO: Add media queries