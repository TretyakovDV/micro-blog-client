import React from 'react';
import { render } from '@testing-library/react';

import Router from '../component';

describe('Router', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Router />);
    expect(asFragment()).toMatchSnapshot();
  });
});
