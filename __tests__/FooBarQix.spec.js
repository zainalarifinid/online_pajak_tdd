
const FooBarQix = require('../src/FooBarQix');

describe('FooBarQix', () => {
    
    it('has an "print" method', () => {
        const fooBarQix = new FooBarQix();
        expect(fooBarQix.print).toBeDefined();
        expect(fooBarQix.print).toBeInstanceOf(Function);
    });

    it('returns number, given number input', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(1)).toBe(1);
        expect(fooBarQix.print(8)).toBe(8);
    });

    it('return Foo, given number input divisible by 3 or contains 3', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(6)).toBe("Foo");
        expect(fooBarQix.print(9)).toBe("Foo");
        expect(fooBarQix.print(13)).toBe("Foo");
        expect(fooBarQix.print(23)).toBe("Foo");
        // expect(fooBarQix.print(33)).toBe(8);
    });

    it('return Bar, given number input divisible by 5 or contains 5', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(10)).toBe("Bar");
        expect(fooBarQix.print(20)).toBe("Bar");
        // expect(fooBarQix.print(57)).toBe("Bar");
        expect(fooBarQix.print(52)).toBe("Bar");
    });

    it('return Qix, given number input divisible by 7 or contains 7', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(14)).toBe("Qix");
        expect(fooBarQix.print(28)).toBe("Qix");
        expect(fooBarQix.print(17)).toBe("Qix");
    });

    it('return BarFoo, given number 53', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(53)).toBe("BarFoo");
        expect(fooBarQix.print(21)).toBe("FooQix");
    });

    it('return FooBarBar, given 15 is divisible by 3 and 5 and contains a 5', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(15)).toBe("FooBarBar");
    });
    
    it('return FooFooFoo, 33 contains twice 3 and is divisible by 3', () => {
        const fooBarQix = new FooBarQix();
        // continue here...
        expect(fooBarQix.print(33)).toBe("FooFooFoo");
    });

});