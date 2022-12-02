const Engineer = require ('../lib/engineer');

describe("Engineer", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Engineer("Suzy", 1, "suzy@gmail.com", "github name");

            expect(obj.github).toEqual("github name");
        });

        // to test methods of the object Engineer
        /*it("should return 'getGithub()', 'getRole()'of the created object", () => {
            const obj = new Engineer("Suzy", 1, "suzy@gmail.com", "github name");

            expect(getGithub(obj)).toEqual("github name");
            expect(getRole(obj)).toEqual(["Suzy", 1, "suzy@gmail.com", "github name"]);
        });*/
        
        // do I need negative TC?
        // to check an error for github name input
        it("should throw an error if github provided in the wrong format", () => {
            const cb = () => new Engineer("Suzy", 1, "suzygmail.com", "");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'github name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });
    });
}); 