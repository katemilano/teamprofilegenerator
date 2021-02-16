const fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
{
    type: 'input',
    message: 'What is the team manager\'s name?',
    name: "manager"
},
{
    type: 'input',
    message: 'What is the team manager\'s id number?',
    name: "managerId"
},
{
    type: 'input',
    message: 'What is the team manager\'s email?',
    name: "managerEmail"
},
{
    type: 'input',
    message: 'What is the team manager\'s office number?',
    name: "managerNumber"
},
{
    type: 'list',
    message: 'Which type of team member would you like to add?',
    name: "type",
    choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
}
])