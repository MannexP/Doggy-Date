import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeroTheme from '../images/heroTheme.jpg';


const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:blue;
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
const HeroStyles = styled.div`
background-color:black;
height:90vh;

img{
  width:100vw;
  height:90vh;
  background-color:black;
 
}
.banner{
  opacity:0.6;
}

`


class Hero extends Component {
  render() {
    return (
      <HeroStyles>
        <img class="banner" src={HeroTheme} alt="herotheme" />

        
        {/* <NavBarStyles id="nav-container" className="some-class">
        <Link to="/"><h3>Dog Date</h3></Link>
        
      
        <div className="right">
          <Link to="/login"><h5>Log In</h5></Link>
          <Link to="/signup"><h5>Sign Ups</h5></Link>
        </div>       
      </NavBarStyles> */}
      </HeroStyles>
      
      
    );
  }
}

export default Hero;
