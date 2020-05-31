import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('<App /> has tic-tac-toe title', () => {
  
  const {getByText} = render(<App />);
  const linkElement = getByText(/tic-tac-toe/i);
  expect(linkElement).toBeInTheDocument();
});
