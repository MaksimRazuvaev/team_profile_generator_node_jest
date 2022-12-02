class Employee {

    constructor(name, id, email) {
        this.name = IsValidName(name);
        this.id = IsValidId(id);
        this.email = ValidateEmail(email);
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return Employee;
    }

    // to validate name user's input
    IsValidName(name) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
    }

    // to validate id user's input
    IsValidId(id) {
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
    }

    // to validate email user's input
    ValidateEmail(email) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)) {
            return true;
        } else {
            throw new Error("Expected parameter 'email' to be a email@gmail.com pattern");
        }
    }
}