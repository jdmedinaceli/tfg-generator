import React, { Component } from 'react';
import {Tipo,Cuando,Porque,Cosa, } from './Titles'

class App extends Component {

  render() {
      const maxTipo = Object.keys(Tipo).length +1
      const maxCuando = Object.keys(Cuando).length +1
      const maxPorque = Object.keys(Porque).length +1
      const maxCosa = Object.keys(Cosa).length +1
    return (
      <div class="App">
        <div id="title"><h1>{Tipo[getRandomArbitrary(1,maxTipo)] +' '+  Cosa[getRandomArbitrary(1,maxCosa)] + Cuando[getRandomArbitrary(1,maxCuando)] + Porque[getRandomArbitrary(1,maxPorque)] }</h1>
      </div></div>
    );
  }
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export default App;
