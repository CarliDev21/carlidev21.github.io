import { compute } from './compute';

describe('compute test suite', () => {
  it('Should return 0 if input negative', () => {
    const result = compute(-5);
    expect(result).toBe(0);
  });

  it('Should return input * 2 if input is positive', () => {
    const result = compute(4);
    expect(result).toBe(8);
  });
});
