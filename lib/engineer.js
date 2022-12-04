const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return Engineer;
    }

    // to validate github name user's input
    isValidGitHub(github){
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github name' to be a non-empty string");
        }
    }
}

module.exports = Engineer;