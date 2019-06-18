
const TheDoors = require("../src/TheDoors");

describe("TheDoors", () => {
    it('It should return 100 closed doors when given no pass', () => {
        const theDoors = new TheDoors();
        expect(theDoors.visit(0)).toBe("####################################################################################################");
    });

     it('should return 100 open doors when given 1 pass', () => {
        const theDoors = new TheDoors();
        expect(theDoors.visit(1)).toBe("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
     });

     it('should return closed door every second door when given 2 pass', () => {
         const theDoors = new TheDoors();
         expect(theDoors.visit(2)).toBe("@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#"); 
     });

     it('should return toggle door every third door when given 3 pass', () => {
        const theDoors = new TheDoors();
        expect(theDoors.visit(3)).toBe("@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###"); 
    });

})
