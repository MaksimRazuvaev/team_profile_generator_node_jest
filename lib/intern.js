const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = isValidSchool(school);
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern;
    }

    // to validate school name user's input
    isValidSchool(school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school name' to be a non-empty string");
        }
    }
}