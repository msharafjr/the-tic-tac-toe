import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Game from '../game.js';

afterEach(cleanup);

test('<Game /> has tic-tac-toe title', () => {
  const {getByText} = render(<Game />);
  const h1 = getByText(/tic-tac-toe/i);
  expect(h1).toBeInTheDocument();
});
