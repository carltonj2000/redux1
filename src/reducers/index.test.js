import counter from './index';

test('increments from 1 by 1 to 2', () => {
  expect(counter({count:1}, 1)).objectContaining({count: 2});
});
