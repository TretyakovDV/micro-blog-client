import React from 'react';
import { useContainer } from './hook';

const Component = () => {
  const props = useContainer();

  return (<p>Component</p>);
};

export default Component;
