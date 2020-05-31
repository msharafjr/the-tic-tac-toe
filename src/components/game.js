import React from 'react';

export default function Game() {
  return (
    <div className='container'>
      <h1>The <span>Tic-Tac-Toe</span> Game</h1>
      <div className='result'>
        <p>Player X: <span>0</span></p>
        <p>Player O: <span>0</span></p>
      </div>
      <p>status</p>
      <div className='board'>
        <div className='board-row'>
          <button />
          <button />
          <button />
        </div>
        <div className='board-row'>
          <button />
          <button />
          <button />
        </div>
        <div className='board-row'>
          <button />
          <button />
          <button />
        </div>
      </div>
      <div className='controllers'>
        <button>Rest game</button>
        <button>New turn</button>
      </div>
    </div>
  );
}
