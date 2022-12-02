// To include nbm packages needed for create questionary (inquier) and save to file (fs) libraries
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// to create an array of user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is title of your project?',
            // to implement accross
            validate: async (input) => {
                if (input !== 'y' || input !== 'n') {
                   return 'Incorrect asnwer';
                }
                return true;
             }
            },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project is about?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to install your app?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use your app?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How to contribute to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How to test your app?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should be upplied to your app?',
            choices: ["ISC", "MIT", "Apache", "GNU", "Mozilla Public License 2.0", "None"],
        },
    ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.appendFile(fileName, JSON.stringify(data), (err) =>
    fs.appendFile(fileName, data, (err) =>

    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answer) => writeToFile('README_PROMPT.md', generateMarkdown(answer)))
      .then(() => console.log('Successfully wrote to README_PROMPT.md'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();