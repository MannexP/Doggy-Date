import React, { Component } from 'react';
import styled from 'styled-components'



const FootBar = styled.div`
display:flex;
justify-content: flex-end;
.navbar {
  background-color: black;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height:8rem;
  h5{
      
      margin-right: 1rem;
      margin-top: 1rem;
      color: green;
      font-weight: lighter;
      margin-left:156rem;
  }
}
`


class Footer extends Component {
    render() {
        return (
            <div>
                <FootBar>
                    <div className="navbar" id="myNavbar">
                        <h5>Copyright © 2019</h5>
                 
                    </div>
                  


                </FootBar>

            </div>
        );
    }
}

export default Footer;