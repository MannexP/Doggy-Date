import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroTheme from "../images/Daug-splash.jpg";

const HeroStyles = styled.div`
  .NavBar {
  }
  * {
    color: #ffffff;
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

  .logo {
    position: absolute;
    top: 20px;
    left: 100px;
  }
  .navBar {
    position: absolute;
    top: 30px;
    right: 100px;
  }
  .nav h5 {
    padding: 1rem 3rem;
    font-weight: 300;
  }

  /* .nav-text {
    position: absolute;
    top: 30px;
    right: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h5 {
    padding: 1rem 3rem;
    font-weight: 300;
  } */
`;

class Hero extends Component {
  render() {
    return (
      <HeroStyles>
        <img class="splash" src={HeroTheme} alt="herotheme" />
        <div className="NavBar">
          <Link className="logo" to="/">
            <h3>Daüg Date</h3>
          </Link>
          <div className="navBar">
            <Link to="/login">
              <h5>Log In</h5>
            </Link>
            <Link to="/signup">
              <h5>Sign Up</h5>
            </Link>
          </div>
        </div>
      </HeroStyles>
    );
  }
}

export default Hero;

{
  /* <div className="NavBar">
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
</div>; */
}
