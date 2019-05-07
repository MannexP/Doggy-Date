import React, { Component } from 'react';
import styled from 'styled-components';
import mainTheme from '../images/dogsPlay.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { deprecate } from 'util';


const MainTheme = styled.div`
  position: relative;

  .text-block {
  height: 8rem;
  width: 94rem;
  position: absolute;
  bottom: 8rem;
  right: 20px;
  background-color: grey;
  opacity: .6;
  border-radius: 2%;
  color: white;
  padding-left: 1rem;
  padding-top: 1em;
  
  
  margin-left: 2rem;
 
}
h4{
    font-size: 5rem;
}
`
class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainTheme>
                    <img src={mainTheme} alt="" />
                    <div className="text-block">
                        <h4>Nature's best friend needs a best friend too</h4>
                    </div>
                </MainTheme>      
            </React.Fragment>   




        );
    }
}
export default HomePage;