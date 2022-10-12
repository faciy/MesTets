import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../Intro';
import {render, screen, fireEvent} from '@testing-library/react-native';

test('examples of some things', async () => {
  const expectedUsername = 'Ada Lovelace';
  render(<Intro />);

  fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  fireEvent.press(screen.getByText('Print Username'));

  const usernameOutput = await screen.findByTestId('printed-username');
  expect(usernameOutput).toHaveTextContent(expectedUsername);
  expect(screen.toJSON()).toMatchSnapshot();
});
