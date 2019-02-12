
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  it('is a StringCalculator object', () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator).toBeInstanceOf(StringCalculator);
  });
});
