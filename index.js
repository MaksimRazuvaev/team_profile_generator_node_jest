// To include nbm packages needed for create questionary (inquier) and save to file (fs) libraries
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

// to extend employee's classes to create an objects
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

// to launch the query after manager is submitted
const toCreateTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Do you want to create new role or exit and form HTML page?',
            choices: ["Engineer", "Intern", "Finish building team"],
        },     
    ])
    .then((answer) => {
        if (answer.role === 'Engineer') {
            enterEngineer();
        } else if (answer.role === 'Intern') {
            enterIntern();
        } else {
            writeToFile('./dist/index.html', generateHTML(team));
        }
    });
};

// initial query to get an manager data
const enterManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager name?',
            validate: namelInput => {
                if (/[A-Za-z]/.test(namelInput)) {
                    return true;
                } else {
                    console.log("Please enter use letters to enter name");
                    return false;
                }
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your manager id?',
            validate: idlInput => {
                if (/[0-9]/.test(idlInput)) {
                return true;
                } else {
                    console.log("Please use numbers for id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your manager email address?',
            validate: emailInput => {
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                    return true;
                } else {
                    console.log("Please enter email in the email@gmail.com format");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your manager office number?',
            validate: officeNumberlInput => {
                if (/[0-9]/.test(officeNumberlInput)) {
                return true;
                } else {
                    console.log("Please use numbers for officeNumber");
                    return false;
                }
            }
        },
    ])
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(manager);
            toCreateTeam();
        });
};

// to launch Engineer query
const enterEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineer name?',
            validate: namelInput => {
                if (/[A-Za-z]/.test(namelInput)) {
                    return true;
                } else {
                    console.log("Please enter use letters to enter name");
                    return false;
                }
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineer id?',
            validate: idlInput => {
                if (/[0-9]/.test(idlInput)) {
                return true;
                } else {
                    console.log("Please use numbers for id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineer email address?',
            validate: emailInput => {
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                    return true;
                } else {
                    console.log("Please enter email in the email@gmail.com format");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineer GitHub username?',
        },
    ])
    .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        team.push(engineer);
        toCreateTeam();
    });
};

// to launch Intern query
const enterIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your intern name?',
            validate: namelInput => {
                if (/[A-Za-z]/.test(namelInput)) {
                    return true;
                } else {
                    console.log("Please enter use letters to enter name");
                    return false;
                }
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your intern id?',
            validate: idlInput => {
                if (/[0-9]/.test(idlInput)) {
                return true;
                } else {
                    console.log("Please use numbers for id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your intern email address?',
            validate: emailInput => {
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                    return true;
                } else {
                    console.log("Please enter email in the email@gmail.com format");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your intern school?',
            validate: schoolInput => {
                if (/[A-Za-z]/.test(schoolInput)) {
                    return true;
                } else {
                    console.log("Please enter use letters to enter school");
                    return false;
                }
            }        
        },
    ])
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        team.push(intern);
        toCreateTeam();
    });
};


// TODO: Create a function to write HTML page
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

// function to initialize app
const init = () => {
    enterManager()
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();