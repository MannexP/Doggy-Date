import React, { Component } from 'react';
import styled from 'styled-components';
import mainTheme from '../images/dogsPlay.jpg';
// import HomeCarousel from './HomeCarousel '

const MainTheme = styled.div`
  
img {   

}
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <MainTheme>
                    <img src={mainTheme} alt=""/>
                </MainTheme>
               {/* <HomeCarousel></HomeCarousel> */}
            </div>
        );
    }
}
export default HomePage;