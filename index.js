// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
  
// Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'Mozilla Public License 2.0', 'BSD 3', 'None'],
    },
    {
        type: 'list',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        choices: ['npm 1'],
    },
    {
        type: 'list',
        message: 'What command should be run to run tests?',
        name: 'tests',
        choices: ['npm test'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What credits would you like to add?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])

}

// Create a function to write README file
function appendFile(response) {
    fs.writeFile('generated_README.md', response, (err) => {
        err ? console.log(err) : console.log('Successfully created Readme file!')
    }
)}

// Create a function to initialize app
function init() {
    promptQuestions().then((answers) => {
        appendFile((generateMarkdown(answers)));
    })
}

// Function call to initialize app
init();