// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
  .promptQuestions([
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
        choices: ['MIT', 'APACHE 2.0', 'GPO 3.0', 'BSD 3', 'None'],
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
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  // TODO: Create a function to write README file
  .then((data) => {
    const filename = `readme.me`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Readme generated!')
    );
  });


// TODO: Create a function to initialize app
function init() {
    promptQuestions()
}

// Function call to initialize app
init();
