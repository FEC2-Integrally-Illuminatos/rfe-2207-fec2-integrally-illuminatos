import React from 'react';

export default function User({name, date}) {
  let index = date.indexOf('T');
  date = date.slice(0, index).split('-').reverse().join(',');
  console.log(date);
  const month = new Date();
  month.setMonth(parseInt(date[3] + date[4]) - 1)
  return <span>{`by ${name}, ${month.toLocaleString('en-US', {month: 'long'})} ${date[0] + date[1]}, ${date.slice(6)}`}</span>
}