// To include nbm packages needed for create questionary (inquier) and save to file (fs) libraries
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

// to extend employee's classes to create an objects
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

// to create an array of user input
const toCreateTeam = () => {
    // return 
    console.log("this is answer"+team);

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Do you want to create new role or exit and form HTML page?',
            choices: ["Engineer", "Intern", "Finish building team"],
        },     
    ])
    .then((answer) => {
        console.log("this is answer"+team);

        if (answer.role === 'Engineer') {
            enterEngineer();
        } else if (answer.role === 'Intern') {
            enterIntern();
        } else {
            // writeToFile();
            // return team;
            console.log(answer);
            // writeToFile('index.html', generateHTML(answer));
            writeToFile('index.html', generateHTML(team));
        }
    });
};

const enterManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager name?',
            // to implement accross
            // validate: async (input) => {
            //     if (input !== 'y' || input !== 'n') {
            //        return 'Incorrect asnwer';
            //     }
            //     return true;
            //  }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your manager id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your manager email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your manager office number?',
        },
    ])
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            console.log(manager);

            console.table(manager);
            console.log("this is manager before team push"+ JSON.stringify(team));
            team.push(manager);
            console.log("this is manager after team push"+JSON.stringify(team));
            console.log("this is team from manager"+JSON.stringify(team));
            toCreateTeam();
        });
};

const enterEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineer name?',
            // to implement accross
            // validate: async (input) => {
            //     if (input !== 'y' || input !== 'n') {
            //         return 'Incorrect asnwer';
            //     }
            //     return true;
            //     }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineer id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineer email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineer GitHub username?',
        },
    ])
    .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        console.table(engineer);
        team.push(engineer);
        toCreateTeam();
    });
};

const enterIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your intern name?',
            // to implement accross
            // validate: async (input) => {
            //     if (input !== 'y' || input !== 'n') {
            //         return 'Incorrect asnwer';
            //     }
            //     return true;
            //     }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your intern id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your intern email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your intern school?',
        },
    ])
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        console.table(intern);
        team.push(intern);
        toCreateTeam();
    });
};


// TODO: Create a function to write HTML page
function writeToFile(fileName, data) {
    // fs.appendFile(fileName, JSON.stringify(data), (err) =>
    fs.appendFile(fileName, data, (err) =>

    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
const init = () => {
    enterManager()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
    //   .then((answer) => writeToFile('index.html', generateHTML(answer)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();