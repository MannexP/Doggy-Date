import React, { Component } from 'react';
import styled from 'styled-components';
import mainTheme from '../images/dogsPlay.jpg';
// import HomeCarousel from './HomeCarousel '

const MainTheme = styled.div`
  position: relative;

  .text-block {
  height: 8rem;
  width: 101rem;
  position: absolute;
  bottom: 5rem;
  right: 20px;
  background-color: black;
  opacity: .4;
  border-radius: 2%;
  color: white;
  padding-left: 1rem;
 
  
  margin-left: 2rem;
 
}
h4{
    font-size: 4.5rem;
}
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <MainTheme>
                    <img src={mainTheme} alt="" />
                    <div className="text-block">
                        <h4>Nature's best friend needs a best friend too</h4>
                    </div>
                </MainTheme>

            </div>
        );
    }
}
export default HomePage;