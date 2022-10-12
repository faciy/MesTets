import React from 'react';
import CommentForm from '../CommentForm';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

afterEach(cleanup);

describe('<CommentForm />', () => {
  it('rendre le contenu', () => {
    const rendered = render(<CommentForm value={'abacaba'} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('devrait déclencher des événements de modification', () => {
    const onChange = jest.fn();
    const rendered = render(<CommentForm onChange={onChange} />);
    const inputComponent = rendered.getByTestId('input');

    fireEvent(inputComponent, 'changeText', 'new text');
    expect(onChange).toHaveBeenCalledWith('new text');
  });

  it('Devrait tirer sur les événements Submit', () => {
    const onSubmit = jest.fn();
    const rendered = render(<CommentForm onSubmit={onSubmit} />);
    const buttonComponent = rendered.getByTestId('submit');

    fireEvent.press(buttonComponent, 'press');
    expect(onSubmit).toHaveBeenCalled();
  });
});
