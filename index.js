// import packages
const fs = require("fs");
const inquirer = require("inquirer");

// import modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const generalQuestions = questions[0];
const conditionalQuestions = questions[1];

// inquirer prompt
// const getGeneralInfo = async function () {
//     await inquirer.prompt(generalQuestions);
//     console.log(answers)
// }

// getGeneralInfo();