import React, { Component } from 'react';
import styled from 'styled-components';
import mainTheme from '../images/dogsPlay.jpg';
// import HomeCarousel from './HomeCarousel '

const MainTheme = styled.div`
  position: relative;

  .text-block {
  height: 30rem;
  width: 70rem;
  position: absolute;
  bottom: 5rem;
  right: 20px;
  background-color: black;
  opacity: 0.5;
  border-radius: 2%;
  color: white;
  padding-left: 20px;
  padding-right: 20rem;
}
h4{}
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <MainTheme>
                    <img src={mainTheme} alt="" />
                    <div className="text-block">
                        <h4>Nature</h4>
                        <p>What a beautiful sunrise</p>
                    </div>
                </MainTheme>

            </div>
        );
    }
}
export default HomePage;