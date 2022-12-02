const Intern = require ('../lib/intern');

describe("Intern", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("should create an object with 'name', 'id', 'email', 'school'", () => {
            const obj = new Intern("Suzy", 1, "suzy@gmail.com", "school");

            expect(obj.school).toEqual("school");
        });

        // to test methods of the object Intern
        /*it("should return 'getSchool()', 'getRole()'of the created object", () => {
            const obj = new Intern("Suzy", 1, "suzy@gmail.com", "school");

            expect(getSchool(obj)).toEqual("school");
            //??? expect(getRole(obj)).toEqual(["Suzy", 1, "suzy@gmail.com", "school"]);
        });*/
        
        // do I need negative TC?
        // to check an error for school input
        it("should throw an error if school provided in the wrong format", () => {
            const cb = () => new Intern("Suzy", 1, "suzygmail.com", "");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'school name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });
    });
}); 