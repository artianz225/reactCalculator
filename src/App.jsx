import React from 'react';
import './App.css';
import { ImSpinner4 } from "react-icons/im";
import { ImSpinner2, ImSpinner9  } from "react-icons/im";

function App() {
  return (
    <div className='main-container'>
      <h1>React Calculator</h1>
      <div className="spinner-container">
        <span className='spinner'><ImSpinner4  /></span>
        <p>Updating on progess</p>
      </div>
      <h3>Display soon <span className='fadeIn-1'>.</span><span className='fadeIn-2'>.</span><span className='fadeIn-3'>.</span></h3>
    </div>
  )
}

export default App
