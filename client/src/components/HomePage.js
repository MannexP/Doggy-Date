import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroTheme from "../images/Daug-splash.jpg";

// const NavBarStyles = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background:blue;
//   height: 8rem;
//   h3{
//     font-size: 4rem;
//     font-weight:lighter
//   }
//   h5{
//     font-size: 2rem;
//     font-weight: lighter;
//   }

//   a {
//     text-decoration: none;
//     padding-left: 10px;
//     color: white;
//     &:active {
//       color: red;
//     }
//   }

//   .right {
//     width: 15vw;
//     display: flex;
//     justify-content: space-around;
//   }
// `

const HeroStyles = styled.div`
*{
    color:#ffffff;
  }
  background-color: black;
  height: 100vh;
  position: relative;
  text-align: center;
  color: white;
  img {
    width: 100vw;
    height: 100vh;
  }
  .splash {
    opacity: 0.6;
  }

  .logo{
    position: absolute;
    top: 20px;
    left: 100px;
  }

  .nav-text {
    position: absolute;
    top: 30px;
    right: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h5 {
    padding: 1rem 4rem;
    font-weight: 300;
  }
`;

class Hero extends Component {
  render() {
    return (
      <HeroStyles>
        <img class="splash" src={HeroTheme} alt="herotheme" />
        <Link class="logo" to="/">
            <h3>Daüg Date</h3>
          </Link>
        <div className="nav-text">
          <Link to="/login">
            <h5>Log In</h5>
          </Link>
          <Link to="/signup">
            <h5>Sign Up</h5>
          </Link>
        </div>
      </HeroStyles>
    );
  }
}

export default Hero;

