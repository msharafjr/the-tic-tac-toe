import React from 'react';

export default function Controllers({controllers: c}) {
  return (
    <div className='controllers'>
      <button onClick={c.resetGame}>Rest game</button>
      <button onClick={c.newTurn}>New turn</button>
    </div>
  )
}
