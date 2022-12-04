const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    }

    // to validate officeNumber user's input
    isValidOfficeNumber(officeNumber) {
        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber.length === 10) {
            throw new Error("Expected parameter 'officeNumber' to be a 10 digits number");
        }
    }
}

module.exports = Manager;