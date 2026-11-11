import config from '../vitest.config';

describe('Vitest configuration', () => {
  it('loads the configuration', () => {
    expect(config).toBeDefined();
  });
});
