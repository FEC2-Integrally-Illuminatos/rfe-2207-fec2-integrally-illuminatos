import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../client/src/components/App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

describe('Test', function() {
  const user = userEvent.setup();

  render(<App />)

  it('should render item category', () => {
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('Kicks');
      });
  });
});