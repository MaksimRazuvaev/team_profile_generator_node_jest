const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // to validate school name user's input
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school name' to be a non-empty string");
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern;
    }
}