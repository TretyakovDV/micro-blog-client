import React from 'react';
import { render } from '@testing-library/react';

import Home from '../component';

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
