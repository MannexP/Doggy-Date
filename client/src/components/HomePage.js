import React, { Component } from 'react';
import styled from 'styled-components'



const MainTheme = styled.div
    `
margin-left:375px;
margin-top: 150px;
img{
    
    height:400px;
}
`



class HomePage extends Component {
    render() {
        return (
            <div>
                <MainTheme>
                    <img src="https://media2.giphy.com/media/Ood1OSF92jubS/200w.webp?cid=3640f6095bf4a3bf6b7041736bb41c94" />
                </MainTheme>
                <MainTheme>
          </MainTheme>
            </div>

        );
    }
}

export default HomePage;