import styled from 'styled-components';

export const FAQWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gid-template-rows: 0.25fr 0.75fr;
  grid-template-areas:
    "title search search search"
    "main main main buttons";
  gap: 25px 0px;
  background-color: #F2F1EF;

`

//TODO: Add media queries