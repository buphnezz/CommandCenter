// NovelDirectory.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import NovelDirectory from './NovelDirectory';

test('renders Novel Directory', () => {
  render(
    <Provider store={store}>
      <NovelDirectory />
    </Provider>
  );
  const linkElement = screen.getByText(/Novel Directory/i);
  expect(linkElement).toBeInTheDocument();
});
