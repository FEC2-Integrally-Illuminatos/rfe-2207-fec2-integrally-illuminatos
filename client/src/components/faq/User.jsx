import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  margin-right: 10px;
`

export default function User({name, date}) {
  let index = date.indexOf('T');
  date = date.slice(0, index).split('-').reverse().join(',');
  const month = new Date();
  month.setMonth(parseInt(date[3] + date[4]) - 1);
  return <Span>by {name === 'Seller' ? <b>{name}</b> : name} {` ${month.toLocaleString('en-US', {month: 'long'})} ${date[0] + date[1]}, ${date.slice(6)}`}</Span>
}