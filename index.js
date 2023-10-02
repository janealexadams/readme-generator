// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ username, email, name, description, license, installation, tests, usage, credits, contributing, questions }) =>
  `## ${name}
   ${license}
  ## Description
    ${description}
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
  ## Installation
    To install necessary dependencies, run the following command: 
    '${installation}'
  ## Usage
    ${usage}
  ## Credits
    ${credits}
  ## License
    ${license}
  ## Contributing
    ${contributing}
  ## Tests
    ${tests}
  ## Questions
    My Github username is: ${username}
    Reach out to me with questions via email here: ${email}
  `;
  
// TODO: Create an array of questions for user input
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
        name: 'credits',
        message: 'What credits would you like to add?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  // TODO: Create a function to write README file
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme file!')
    );
  });
}

// TODO: Create a function to initialize app
function init() {
    promptQuestions()
}

// Function call to initialize app
init();