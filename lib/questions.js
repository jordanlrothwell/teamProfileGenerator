const generalQuestions = [
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
    type: "input",
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
];

const conditionalQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message(answers) {
      return `Assign ${answers.name} an office number:`;
    },
  },
  {
    type: "input",
    name: "github",
    message(answers) {
      return `What is ${answers.name}'s github username?`;
    },
  },
  {
    type: "input",
    name: "school",
    message(answers) {
      return `What school is ${answers.name} attending?`;
    },
  },
];

module.exports = [generalQuestions, conditionalQuestions];
