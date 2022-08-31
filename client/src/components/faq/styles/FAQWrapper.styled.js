import styled from 'styled-components';

export const FAQWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gid-template-rows: 0.25fr 0.75fr;
  grid-template-areas:
    "search search search"
    "main main buttons";
  gap: 15px 10px;
`

//TODO: Add media queries