import React from 'react';
import styled from 'styled-components';
import RosmatikaTTF from './fonts/RosmatikaRegular.ttf';
import FAQ from './QuestionWrapper.jsx';
import {NavHashLink} from 'react-router-hash-link';
import faq from './QuestionWrapper.jsx';
import '../../assets/stylesOverview.css';


const NavContainer = styled.div`
  background: #eba9a2;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 3;
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
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'underline',
  padding: '0.5rem 1rem',
  height: '100%',
  fontFamily: "'Yeseva One', cursive"
}

const logo = {
  color: 'white',
  marginRight: 'auto',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Yeseva One', cursive",
}

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
          <NavHashLink smooth to='#related_products'  style={linkStyle}>
          Related Products
          </NavHashLink>
        </ListItem>
        <ListItem>
          <NavHashLink smooth to='#faq'  style={linkStyle}>
          Questions & Answers
          </NavHashLink>
        </ListItem>
        <ListItem>
          <NavHashLink smooth to='#gohere'  style={linkStyle}>
          Reviews
          </NavHashLink>
        </ListItem>
      </List>
      </Nav>
    </NavContainer>
  )
}