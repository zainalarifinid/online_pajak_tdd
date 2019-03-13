
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
    expect(stringCalculator.add("")).toBe(0);
  });

  it('return the value, given a single number', () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('1')).toBe(1);
    expect(stringCalculator.add('2')).toBe(2);
  })

  it('return the sum, give two number with comma delimited', () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('1,2')).toBe(3);
    expect(stringCalculator.add('10,20')).toBe(30);
  })

  it('should return the sum, give two number with newline delimited', () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('1\n2')).toBe(3);
  });

  it("shoudld return sum, given four numbers, with delimited either way", () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('1\n2,3\n4')).toBe(10);
  })

  it("should return exception with the message, give negative numbers", () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('-5,2')).toBe("negatives not allowed: -5");
    expect(stringCalculator.add('-1,2,-3')).toBe("negatives not allowed: -1,-3");
  })

  it("shoukd ignored numbers greater than 1000", () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('1,2,3,1000,1005')).toBe(6);
  })

  it.only("should change delimited, given a single char on the first line starting", () => {
    const stringCalculator = new StringCalculator();
    expect(stringCalculator.add('//#\n1#2')).toBe(3);
  })

});
