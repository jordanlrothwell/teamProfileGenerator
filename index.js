// import packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// import modules
const questions = require("./lib/questions");
const htmlGenerator = require("./htmlGenerator");

// get existing employee data
const employeesJSON = fs.readFileSync(
  path.resolve(__dirname, "./data/employees.json")
);
const employeesArr = JSON.parse(employeesJSON);

// content writer function
const writeContent = async function () {
  const content = await htmlGenerator();
  fs.writeFile("teamProfilePage.html", content, (err) => {
    if (err) {
      console.log("Failed to create teamProfilePage.html");
    }
  })
};

// function to create new employee instance + add it to the employees.json file
const createEmployees = async function () {
  const employeeInfo = await inquirer.prompt(questions);

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
    createEmployees();
  } else {
    writeContent();
  }
};


init();