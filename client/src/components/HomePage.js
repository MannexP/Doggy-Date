import React, { Component } from 'react';
import styled from 'styled-components'
// import YouTube from 'react-youtube';
 
 

const MainTheme = styled.div
    `
margin-left:375px;
margin-top: 150px;
img{
    
    height:400px;
}
`
class HomePage extends Component                                        {
//     render() {
//       const opts = {
//         height: '390',
//         width: '640',
//         playerVars: { // https://developers.google.com/youtube/player_parameters
//           autoplay: 1
//         }
//       };
   
//       return (
//         <YouTube
//           videoId="2g811Eo7K8U"
//           opts={opts}
//           onReady={this._onReady}
//         />
//       );
//     }
   
//     _onReady(event) {
//       // access to player in all event handlers via event.target
//       event.target.pauseVideo();
//     }
//   }
   
   
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