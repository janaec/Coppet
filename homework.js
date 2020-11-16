const fs = require('fs')
const inquirer = require("inquirer");
const path = require("path")


const generateMarkDown = require ("./utils/generateMarkdown")

const question = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {   type: "list",
        message: "Which License do you use",
        choices: ["MIT", "APACHE 2.0", "GPL"],
        name: "license"
    },
    {
        type:'checkbox',
        message:' Preferred method of communication?',
        name: 'contact',
        choices: ['Phone', 'Text Message', 'Email'],
    }

];


function writetoFile(filename, data) {
    return fs.writeFileSync(path.join(__dirname, filename), data)
}

function init() {
    inquirer.prompt(question).then(function (answers) {
        console.log(answers)
        writetoFile("README.md", generateMarkDown(answers))

    })
}


init()