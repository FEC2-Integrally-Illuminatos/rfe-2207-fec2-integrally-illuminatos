import styled from 'styled-components';
import '../../../assets/stylesRelatedProducts.css';


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
  padding: 4% 0 6% 0;
  font-family: Karla;
`

//TODO: Add media queries