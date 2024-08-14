import React from 'react';
import './App.css';

const NumberPad = () => (
  <div className="numbers">
    {[...Array(9).keys()].map(num => (
      <div key={num + 1} className="number">{num + 1}</div>
    ))}
    <div className="number delete">X</div>
  </div>
);

export default NumberPad;
