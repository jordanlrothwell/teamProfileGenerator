// import packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// import modules
const questions = require("./lib/questions");
const htmlGenerator = require("./htmlGenerator");

// function to get user input and add to employees.json
const createEmployees = async function () {
  const employeesJSON = fs.readFileSync(
    path.resolve(__dirname, "./data/employees.json")
  );
  const employeesArr = JSON.parse(employeesJSON);
  const employeeInfo = await inquirer.prompt(questions);

  employeesArr.push(employeeInfo);

  const updatedEmployees = JSON.stringify(employeesArr);

  fs.writeFile("./data/employees.json", updatedEmployees, (err) => {
    if (err) {
      console.log("Failed to successfully update employees.json");
    }
  });
};

// function to create html content based on employees.json
const writeContent = async function () {
  const content = await htmlGenerator();
  fs.writeFile("teamProfilePage.html", content, (err) => {
    if (err) {
      console.log("Failed to create teamProfilePage.html");
    }
  });
};

const init = async function () {
  await createEmployees();
  const repeat = await inquirer.prompt({
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another employee?",
  });
  if (repeat.addAnother) {
    await createEmployees();
  } else {
    writeContent();
  }
};

init();