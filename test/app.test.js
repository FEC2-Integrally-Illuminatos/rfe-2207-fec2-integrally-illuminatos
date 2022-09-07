import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../client/src/components/App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

// describe('App', function() {
//   it('renders without crashing', function() {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })

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

describe('QuestionWrapper', function() {
  const user = userEvent.setup();
  render(<App />);
  it('renders Question Wrapper correctly', function() {
    expect(getByTestId(document.documentElement, 'questionWrapper')).toBeInTheDocument()
  })
})