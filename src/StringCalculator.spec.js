
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  it('has an "add" method', () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add).toBeDefined();
    expect(stringCalculator.add).toBeInstanceOf(Function);
  });

  it('returns zero, given an empty string', () => {
    const stringCalculator = new StringCalculator();
    // continue here...
  });
});
