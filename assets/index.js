// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is the test process?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What licenses are required?',
        name: 'license',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name:'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = "./dist/README.md";

    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Your README file has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.createPromptModule(questions)
    .then (data => writeToFile(generateMarkdown(data)))
}


// Function call to initialize app
init();
