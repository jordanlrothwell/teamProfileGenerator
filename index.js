// import packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// import modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");

// get existing employee data
const employeesJSON = fs.readFileSync(
  path.resolve(__dirname, "./data/employees.json")
);
const employeesObj = JSON.parse(employeesJSON);

// function to create new employee instance + add it to the employees.json file
const createEmployee = async function () {
  const employeeInfo = await inquirer.prompt(questions);

  if (employeeInfo.employeeType == "Manager") {
    const { name, id, email, officeNumber } = employeeInfo;
    var newEmployee = new Manager(name, id, email, officeNumber);
  } else if (employeeInfo.employeeType == "Engineer") {
    const { name, id, email, github } = employeeInfo;
    var newEmployee = new Engineer(name, id, email, github);
  } else {
    const { name, id, email, school } = employeeInfo;
    var newEmployee = new Intern(name, id, email, school);
  }

  employeesObj.push(newEmployee);

  const updatedEmployees = JSON.stringify(employeesObj);

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
