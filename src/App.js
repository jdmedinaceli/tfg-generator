import React, { Component } from 'react';
import {Tipo,Cuando,Porque,Cosa, } from './Titles'

class App extends Component {

  render() {
      const max = Object.keys(Tipo).length +1
    return (
      <div class="App">
        <div id="title"><h1>{Tipo[getRandomArbitrary(1,max)] +' '+  Cosa[getRandomArbitrary(1,max)] + Cuando[getRandomArbitrary(1,max)] + Porque[getRandomArbitrary(1,max)] }</h1>
      </div></div>
    );
  }
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export default App;
