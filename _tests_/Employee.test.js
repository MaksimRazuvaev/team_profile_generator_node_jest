const Employee = require ('../lib/employee');

describe("Employee", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Employee("Suzy", 1, "suzy@gmail.com");

            expect(obj.name).toEqual("Suzy");
            // expect(obj).toEqual({"Suzy", 1, "suzy@gmail.com"});
        });
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Employee("Suzy", 1, "suzy@gmail.com");

            expect(obj.id).toEqual(1);
            // expect(obj).toEqual({"Suzy", 1, "suzy@gmail.com"});
        });
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Employee("Suzy", 1, "suzy@gmail.com");

            expect(obj.email).toEqual("suzy@gmail.com");
            // expect(obj).toEqual({"Suzy", 1, "suzy@gmail.com"});
        });





        // to test methods of the object Employee
        /*it("should return 'getName()', 'getId', 'getEmail', 'getRole' of the created object", () => {
            const obj = new Employee("Suzy", 1, "suzy@gmail.com");

            expect(obj.getName()).toEqual("Suzy");
            expect(obj.getId()).toEqual(1);
            expect(obj.getEmail()).toEqual("suzy@gmail.com");
            //??? expect(getRole(obj)).toEqual(["Suzy", 1, "suzy@gmail.com"]);
        });*/
        
        // do I need negative TC?
        // to check an error for name input
        /*it("should throw an error if name provided in the wrong format", () => {
            const cb = () => new Employee(3, 1, "suzy@gmail.com");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb.IsValidName()).toThrowError(err);
        });
        // to check an error for id input
        it("should throw an error if name provided in the wrong format", () => {
            const cb = () => new Employee("Suzy", "five", "suzy@gmail.com");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });
        // to check an error for email input
        it("should throw an error if email provided in the wrong format", () => {
            const cb = () => new Employee("Suzy", "five", "suzygmail.com");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a email@gmail.com pattern");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(ValidateEmail(this.email)).toThrowError(err);
        });*/
    });
}); 