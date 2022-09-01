import React from "react";
import styled from "styled-components";
import ReviewsListItem from "./ReviewsListItem.jsx";
var ReviewsListItemNameDate = function (props) {
  //console.log("namedate prop ", props);
  const { reviewer_name, date } = props;
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
  let d = new Date(date);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[d.getMonth() - 1];
  let _date = d.getDate();
  let year = d.getFullYear();
  let UserDateStr = `${reviewer_name}, ${month} ${_date}, ${year}`;
  // console.log(UserDateStr);

  return (<span>{UserDateStr}</span>);
};

// const ReviewContainer = styled.div`
//   position: absolute;
//   width: 80%;
//   right: 100px;
//   max-width: 50%;
//   border: 3px solid red;
// `;

export default ReviewsListItemNameDate;
