import React from 'react';
import Intro from '../Intro';
import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('<Intro />', () => {
  it('corresponde au composant', () => {
    const rendered = render(<Intro value={'charles'} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('devrait rendre correctement le texte', () => {
    const rendered = render(<Intro value={'charles'} />);
    const textComponent = rendered.getByTestId('text');
    expect(textComponent.props.children).toEqual('charles');
  });

  it("enveloppé d'un style flex", () => {
    const rendered = render(<Intro value={'charles'} />);
    const wrapperComponent = rendered.getByTestId('wrapper');
    expect(wrapperComponent.props.style).toMatchObject({flex: 1});
  });

  it('devrait rendre le texte rouge', () => {
    const rendered = render(<Intro value={'charles'} />);
    const textComponent = rendered.getByTestId('text');
    expect(textComponent.props.style).toMatchObject({color: 'red'});
  });
});
