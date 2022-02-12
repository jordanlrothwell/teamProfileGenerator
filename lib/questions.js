const questionsAll = [
  {
    type: "list",
    name: "employeeType",
    message: "Choose an employee type:",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: `What is this ${answers.employeeType}'s name?`,
  },
  {
    type: "input",
    name: "id",
    message: `Assign an ID to ${answers.name}:`,
  },
  {
    type: "input",
    name: "email",
    message: `What is ${answers.name}'s email address?`,
  },
];

const questionsType = [
  {
    type: "input",
    name: "officeNumber",
    message: `Assign ${answers.name} an office number:`,
  },
  {
    type: "input",
    name: "github",
    message: `What is ${answers.name}'s github username?`,
  },
  {
    type: "input",
    name: "school",
    message: `What school is ${answers.name} attending?`,
  },
];

module.exports = [
    questionsAll,
    questionsType
]