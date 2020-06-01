import React from 'react';

export default function Board({board, onClick}) {
  function renderCell(i) {
    return (
      <button
        onClick={() => onClick(i)}
        >
          {board[i]}
        </button>
    )
  }

  return (
    <div className='board'>
      <div className='board-row'>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className='board-row'>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className='board-row'>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  )
}
