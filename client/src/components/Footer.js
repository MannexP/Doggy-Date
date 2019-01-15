import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FootBar = styled.div`
.navbar {
  background-color: #183311  ;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
`


class Footer extends Component {
    render() {
        return (
            <div>
                <FootBar>
                    <div class="navbar" id="myNavbar">
                        <Link to="/login"><h5>Log In</h5></Link>
                        <Link to="/signup"><h5>Sign Up</h5></Link>
                        {/* <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a> */}
                    </div>


                </FootBar>

            </div>
        );
    }
}

export default Footer;