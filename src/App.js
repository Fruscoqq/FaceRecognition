import React from 'react';
import "./css/main.css";
import Navigation from "./Components/Navigation";
import ImageLinkForm from './Components/ImageLinkForm';
import Rank from './Components/Rank';
import ImageField from './Components/ImageField';


// State
import FaceState from './context/faceRecognition/faceState';

function App() {
  return (
    <div className="App">
      <FaceState>
        <Navigation />
        <div className="container">
          <div className="wrapper">
            <Rank />
            <ImageLinkForm />
            {/* <ImageField /> */}
          </div>
        </div>
      </FaceState>
    </div>
  );
}

export default App;
