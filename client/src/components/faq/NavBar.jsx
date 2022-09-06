import React from 'react';
import styled from 'styled-components';
import RosmatikaTTF from './fonts/RosmatikaRegular.ttf';
import FAQ from './QuestionWrapper.jsx';
import {NavHashLink} from 'react-router-hash-link';
import faq from './QuestionWrapper.jsx';

const NavContainer = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

const Nav = styled.nav`
  width: 1400px;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  align-items: center;
`
// display: flex;
//  justify-content: space-between;
//  height: 80px;
//  z-index: 1;
//  width: 100%;
//  max-width: 1300px;
//  margin-right: auto;
//  margin-left: auto;
//  padding-right: 50px;
//  padding-left: 50px;

// const NavName = styled.div`
//   width: 128px;
//   height: 22px;
//   font-family: 'Rosmatika';
//   cursor: pointer;
// `
// @font-face {
//   font-family: 'Rosmatika';
// };
// margin-top: 10px;
const List = styled.ul`
display: flex;
justify-content: flex-end;
display: flex;
align-items: center;
justify-content: center;
list-style: none;
text-align: center;
justify-content: end;
`

const linkStyle = {
  color: '#000000',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'underline',
  padding: '0.5rem 1rem',
  height: '100%'
}

const logo = {
  color: 'black',
  marginRight: 'auto',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Rosmatika'
}
// fontFamily: 'Rosmatika',
// marginTop: '10px'
const ListItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;
`

export default function NavBar(props) {

  return (
    <NavContainer id='home'>
      <Nav>
      <NavHashLink smooth to='#home' style={logo}>
        Chévere
      </NavHashLink>
      <List>
        <ListItem>
          <NavHashLink smooth to='#overview' style={linkStyle} >
          Overview
          </NavHashLink>
        </ListItem>
        <ListItem>
          <NavHashLink smooth to='#related_products' activeStyle={{color: 'red'}} style={linkStyle}>
          Related Products
          </NavHashLink>
        </ListItem>
        <ListItem>
          <NavHashLink smooth to='#faq' activeStyle={{color: 'red'}} style={linkStyle}>
          Questions & Answers
          </NavHashLink>
        </ListItem>
        <ListItem>
          <NavHashLink smooth to='#gohere' activeStyle={{color: 'red'}} style={linkStyle}>
          Reviews
          </NavHashLink>
        </ListItem>
      </List>
      </Nav>
    </NavContainer>
  )
}