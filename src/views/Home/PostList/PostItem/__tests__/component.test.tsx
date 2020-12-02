import React from 'react';
import { render } from '@testing-library/react';

import Component from '../component';

describe('Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
