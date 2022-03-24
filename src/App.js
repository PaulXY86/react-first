import React from 'react';
import ImageInSrc from './image/Univers.jpeg';
//import myVideo from "./myvideo.mp4";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

        <h1 class="title red">Your name here</h1>

        <br />

        <img src={ImageInSrc} alt="text" />

        <br />

        <img src="../../imageInPublic.jpg" alt="text" />

      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ANDGsfawSO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </React.Fragment>
  );
}

export default App;
