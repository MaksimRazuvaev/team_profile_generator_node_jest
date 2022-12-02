const Manager = require ('../lib/manager');

describe("Manager", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("should create an object with 'name', 'id', 'email', 'officeNumber'", () => {
            const obj = new Manager("Suzy", 1, "suzy@gmail.com", 2323236666);

            expect(obj.officeNumber).toEqual("2323236666");
        });

        // to test methods of the object Manager
        /*it("should return 'getRole()'of the created object", () => {
            const obj = new Manager("Suzy", 1, "suzy@gmail.com", 2323236666);

            expect(getRole(obj)).toEqual(["Suzy", 1, "suzy@gmail.com", 2323236666]);
        });*/
        
        // do I need negative TC?
        // to check an error for officeNumber input
        it("should throw an error if officeNumber provided in the wrong format", () => {
            const cb = () => new Manager("Suzy", 1, "suzygmail.com", 654);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'officeNumber' to be a 10 digits number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });
    });
}); 