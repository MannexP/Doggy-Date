import React, { Component } from 'react';
import styled from 'styled-components'



const FootBar = styled.div`
.navbar {
  background-color: #28282B;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height:8rem;
  h5{
      float:right;
      margin-right: 1rem;
      margin-top: 1rem;
      color: white;
      font-weight: light;
  }
}
`


class Footer extends Component {
    render() {
        return (
            <div>
                <FootBar>
                    <div class="navbar" id="myNavbar">
                        <h5>Copyright © 2019</h5>
                 
                    </div>
                  


                </FootBar>

            </div>
        );
    }
}

export default Footer;