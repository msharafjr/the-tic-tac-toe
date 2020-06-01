import React from 'react';

export default function Info({score, status}) {
  let maxWin;
  if (score.X > score.O) maxWin = '👈';
  else if (score.O > score.X) maxWin = '👉';
  else maxWin = '🤟';
  return (
    <React.Fragment>
      <div className='result'>
        <p>Player X: <span>{score.X}</span></p>
        <p style={{fontSize: '2rem'}}>{maxWin}</p>
        <p>Player O: <span>{score.O}</span></p>
      </div>
      <p>{status}</p>
    </React.Fragment>
  )
}
