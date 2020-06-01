import React from 'react';
import calculateWinner from '../utils/calculate-winner';

export default function Game() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState('X');

  const winner = calculateWinner(board);

  function onCellClick(cell) {
    if (winner || board[cell]) return;

    setBoard(board.map((c, i) => cell === i ? turn : c));
    setTurn(s => s === 'X' ? 'O' : 'X');
  }

  let status;
  if (winner) status = `Winner ${winner}`;
  else if (board.every(Boolean)) status = 'Even';
  else status = `Next player: ${turn}`;

  return (
    <div className='container'>
      <h1>The <span>Tic-Tac-Toe</span> Game</h1>
      <div className='result'>
        <p>Player X: <span>0</span></p>
        <p>Player O: <span>0</span></p>
      </div>
      <p>{status}</p>
      <div className='board'>
        <div className='board-row'>
          <button onClick={() => onCellClick(0)}>{board[0]}</button>
          <button onClick={() => onCellClick(1)}>{board[1]}</button>
          <button onClick={() => onCellClick(2)}>{board[2]}</button>
        </div>
        <div className='board-row'>
          <button onClick={() => onCellClick(3)}>{board[3]}</button>
          <button onClick={() => onCellClick(4)}>{board[4]}</button>
          <button onClick={() => onCellClick(5)}>{board[5]}</button>
        </div>
        <div className='board-row'>
          <button onClick={() => onCellClick(6)}>{board[6]}</button>
          <button onClick={() => onCellClick(7)}>{board[7]}</button>
          <button onClick={() => onCellClick(8)}>{board[8]}</button>
        </div>
      </div>
      <div className='controllers'>
        <button onClick={() => setBoard(Array(9).fill(null))}>Rest game</button>
        <button onClick={() => setBoard(Array(9).fill(null))}>New turn</button>
      </div>
    </div>
  );
}
