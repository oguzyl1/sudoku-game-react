import React from 'react';
import './App.css';

const SudokuGrid = () => {
  const cells = Array(81).fill(null);

  return (
    <div className="sudoku-grid">
      {cells.map((_, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        return (
          <div
            key={index}
            className="sudoku-grid-cell"
            style={{
              marginBottom: row % 3 === 2 ? '10px' : '0',
              marginRight: col % 3 === 2 ? '10px' : '0',
            }}
          />
        );
      })}
    </div>
  );
};

export default SudokuGrid;
