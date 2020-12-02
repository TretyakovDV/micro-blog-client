import { useContainer } from '../hook';

describe('useContainer()', () => {
  const props = useContainer();

  it('props is empty object', () => {
    expect(props).toEqual({});
  });
});
