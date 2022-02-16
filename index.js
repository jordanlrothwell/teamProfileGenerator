// import packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// import modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");

// get existing employee data
const employeesJSON = fs.readFileSync(
  path.resolve(__dirname, "./data/employees.json")
);
const employeesArr = JSON.parse(employeesJSON);

// function to create new employee instance + add it to the employees.json file
const createEmployee = async function () {
  const employeeInfo = await inquirer.prompt(questions);

  if (employeeInfo.employeeType == "Manager") {
    const { name, id, email, officeNumber } = employeeInfo;
  } else if (employeeInfo.employeeType == "Engineer") {
    const { name, id, email, github } = employeeInfo;
  } else {
    const { name, id, email, school } = employeeInfo;
  }

  employeesArr.push(employeeInfo);

  const updatedEmployees = JSON.stringify(employeesArr);

  await fs.writeFile("./data/employees.json", updatedEmployees, (err) => {
    if (err) {
      console.log("Failed to successfully update employees.json");
    }
  });

  const repeat = await inquirer.prompt({
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another employee?",
  });

  if (repeat.addAnother) {
      createEmployee();
  }
};

createEmployee();
