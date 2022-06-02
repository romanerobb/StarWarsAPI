import React, { useState, useEffect } from 'react';
import RandomArt from './components/RandomArt';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <center>
    <div className="App">
      <img src="https://i.pinimg.com/564x/fe/e6/c1/fee6c1fc5fba37827fd45f00df7ee4a1.jpg" alt="Italian Trulli" width="800" height="300"></img>
     <RandomArt />
    </div>
    </center>
  );
}

export default App;