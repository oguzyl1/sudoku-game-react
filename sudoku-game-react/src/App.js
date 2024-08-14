import React from 'react';
import './App.css'; 
import GameInfo from './GameInfo';
import Navbar from './Navbar';
import SudokuGrid from './SudokuGrid';
import NumberPad from './NumberPad';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="screen">
          <div className="game-screen">
            <SudokuGrid />
            <GameInfo />
            <NumberPad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
