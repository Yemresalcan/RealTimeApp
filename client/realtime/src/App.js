
import { useEffect, useState } from 'react';
import './App.css';
import Palatte from './components/Palatte';
import { init,subscribe } from './socketApi';

function App() {

const [activeColor,setactiveColor]= useState("#282c34")

useEffect(()=>{
  init();

  subscribe((color)=> {
    setactiveColor(color);
  });
},[]);

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <h3>{activeColor}</h3>
      <Palatte activeColor={activeColor}/>
    </div>
  );
}

export default App;
