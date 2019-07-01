
const BalancedBracket = require('../src/BalancedBracket');

describe('Balanced Bracket', () => {
  it('it should return empty string, given input empty string', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check("")).toBe("");
  });
  it('should return OK, given input one valid balanced bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check('[]')).toBe('OK');
  });
  it('should return FAIL, given input one invalid balanced bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check('[')).toBe('FAIL');
  });
  it('should return FAIL, given input with first character is close bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check(']')).toBe('FAIL');
    expect(balancedBracket.check('][')).toBe('FAIL');
  });
  it('should return FAIL, given input with last character is open bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check('[]][')).toBe('FAIL');
  });
  it('should return OK, given input two valid balanced bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check('[[]]')).toBe('OK');
    expect(balancedBracket.check('[][][]')).toBe('OK');
  });
  it('should return FAIL, given input invalid balanced bracket in balanced bracket', () => {
    const balancedBracket = new BalancedBracket();
    expect(balancedBracket.check('[]]]')).toBe('FAIL');
  })
});
