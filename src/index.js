import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function FavouriteColour(){
  const [colour, setColour] = useState('red');

  return (
    <>
      <p className={ colour }>I love the colour {colour}</p>
      <button onClick={()=> {setColour('red')}}>RED</button>
      <button onClick={()=> {setColour('blue')}}>BLUE</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavouriteColour />)