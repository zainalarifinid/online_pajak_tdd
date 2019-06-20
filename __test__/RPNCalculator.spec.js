const RPNCalculator = require('../src/RPNCalculator');

describe('RPNCalculator', () => {

    it('should return digit when given digit input', () => {
        const rpnCalculator = new RPNCalculator();
        expect(rpnCalculator.process("1")).toBe(1);
    });

    it('should return digits when given digits input', () => {
        const rpnCalculator = new RPNCalculator();
        expect(rpnCalculator.process("1 2 3")).toBe(123);
    });

    it('should result of operation digits when given 2 digit with operator', () => {
        const rpnCalculator = new RPNCalculator();
        expect(rpnCalculator.process("1 2 +")).toBe(3);
        expect(rpnCalculator.process("5 2 -")).toBe(3);
        expect(rpnCalculator.process("10 5 /")).toBe(2);
        expect(rpnCalculator.process("10 5 *")).toBe(50);
    });

    it('should result of operation digits when given 2 process operation', () => {
        const rpnCalculator = new RPNCalculator();
        expect(rpnCalculator.process("1 2 + 5 +")).toBe(8);
        expect(rpnCalculator.process("10 3 + 5 -")).toBe(8);
        expect(rpnCalculator.process("10 4 + 7 /")).toBe(2);
        expect(rpnCalculator.process("10 5 + 2 *")).toBe(30);
    })

    it('should result of operation digits when given 3 process operation', () => {
        const rpnCalculator = new RPNCalculator();
        expect(rpnCalculator.process("1 2 + 5 + 2 +")).toBe(10);
        expect(rpnCalculator.process("3 5 8 * 7 + *")).toBe(141);
        expect(rpnCalculator.process("2 3 5 8 * 7 + * *")).toBe(282);
    })

})
