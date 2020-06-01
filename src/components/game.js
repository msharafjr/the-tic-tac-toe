import React from 'react';

import {useGame} from '../hooks/use-game';
import Info from '../components/info';
import Board from '../components/board';
import Controllers from '../components/controllers';

export default function Game() {
  const {board, setCell, score, resetGame, newTurn, status} = useGame();

  return (
    <div className='container'>
      <h1>The <span>Tic-Tac-Toe</span> Game</h1>
      <Info score={score} status={status} />
      <Board board={board} onClick={setCell} />
      <Controllers controllers={{resetGame, newTurn}} />
    </div>
  );
}
