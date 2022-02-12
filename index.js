// import packages
const fs = require("fs");
const inquirer = require("inquirer");

// import modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");

// inquirer prompts
const createEmployee = async function () {
  const employeeInfo = await inquirer.prompt(questions);

  if (employeeInfo.employeeType == "Manager") {
    const { name, id, email, officeNumber } = employeeInfo;
    const newManager = new Manager(name, id, email, officeNumber);
    console.log(newManager);
  }
};

createEmployee();
