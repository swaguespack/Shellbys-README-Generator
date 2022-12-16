// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown");

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
        name: 'licenses',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.createPromptModule(questions)
    
}

// Function call to initialize app
init();
