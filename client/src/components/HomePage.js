import React, { Component } from 'react';
import styled from 'styled-components';
import mainTheme from '../images/dogsPlay.jpg';

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
                <MainTheme>
                </MainTheme>
            </div>
        );
    }
}
export default HomePage;