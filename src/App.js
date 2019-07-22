import React from 'react';

import './style.css'

import ProgressiveImage from './ProgressiveImage';
import smallPicture from './pictureSmall.png';

import picture from './picture.png'

function App() {
  return (
      <div className="App">
        <ProgressiveImage
            image={picture}
            preview={smallPicture}
        />
      </div>
  );
}

export default App;
