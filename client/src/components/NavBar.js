import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#28282B;
  height: 8rem;
  h3{
    font-size: 4rem;
    font-weight:lighter
  }
  h5{
    font-size: 2rem;
    font-weight: lighter;
  }
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }

  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" className="some-class">
        <Link to="/"><h3>Doggy Dates</h3></Link>
        
      
        <div className="right">
          <Link to="/login"><h5>Log In</h5></Link>
          <Link to="/signup"><h5>Sign Up</h5></Link>
        </div>       
      </NavBarStyles>
    );
  }
}

export default NavBar;
