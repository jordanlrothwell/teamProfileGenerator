const questions = [
  {
    type: "list",
    name: "employeeType",
    message: "Choose an employee type:",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message(answers) {
      return `What is this ${answers.employeeType}'s name?`;
    },
  },
  {
    type: "number",
    name: "id",
    message(answers) {
      return `Assign an ID to ${answers.name}:`;
    },
  },
  {
    type: "input",
    name: "email",
    message(answers) {
      return `What is ${answers.name}'s email address?`;
    },
  },
  {
    type: "number",
    name: "officeNumber",
    message(answers) {
      return `Assign ${answers.name} an office number:`;
    },
    when(answers) {
      return answers.employeeType == "Manager";
    },
  },
  {
    type: "input",
    name: "github",
    message(answers) {
      return `What is ${answers.name}'s github username?`;
    },
    when(answers) {
      return answers.employeeType == "Engineer";
    },
  },
  {
    type: "input",
    name: "school",
    message(answers) {
      return `What school is ${answers.name} attending?`;
    },
    when(answers) {
      return answers.employeeType == "Intern";
    },
  },
];

module.exports = questions;
