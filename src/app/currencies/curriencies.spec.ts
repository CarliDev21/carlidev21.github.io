import { getCurrencies } from './currencies';

describe('currencies', () => {
  it('should return a list of currency codes', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('EUR');
    expect(result).toContain('JPY');
  })
})
