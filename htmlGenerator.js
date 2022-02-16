// import packages
const fs = require("fs");
const path = require("path");

// import modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// get existing employee data
const employeesJSON = fs.readFileSync(
  path.resolve(__dirname, "./data/employees.json")
);
const employeesArr = JSON.parse(employeesJSON);

// instantiates subclasses and creates card for each object in employees.json
const htmlGenerator = function () {
  var cards = "";
  for (const employee of employeesArr) {
    if ("officeNumber" in employee) {
      var newEmployee = new Manager(
        employee.name,
        employee.id,
        employee.email,
        employee.officeNumber
      );
      var dynamic = "Office Number";
    } else if ("github" in employee) {
      var newEmployee = new Engineer(
        employee.name,
        employee.id,
        employee.email,
        employee.github
      );
      var dynamic = "Github Username:";
    } else {
      var newEmployee = new Intern(
        employee.name,
        employee.id,
        employee.email,
        employee.school
      );
      var dynamic = "School";
    }
    var newCard = `<div class="col-4 pb-5">
    <div class="card shadow" style="width: 18rem">
        <div class="card-header bg-primary">
            <h5 class="card-title text-white pt-1">${newEmployee.name}</h5>
            <div class="d-inline-flex align-items-center">
                <img class="align-items-center" src="./dist/icons/${newEmployee.getRole()}.svg" alt="${newEmployee.getRole()} icon">
                <h6 class="card-title text-white mb-0 p-1">${newEmployee.getRole()}</h6>
            </div>
        </div>
        <div class="card-body bg-light pt-4 pb-5">
            <ul class="list-group pt-2">
                <li class="list-group-item">ID: ${newEmployee.getId()}</li>
                <li class="list-group-item">Email: ${newEmployee.getEmail()}</li>
                <li class="list-group-item">${dynamic}: ${
      Object.values(newEmployee)[3]
    }</li>
            </ul>
        </div>
    </div>
</div>`;
    cards += newCard;
  }
  return `<!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/dist/css/custom.min.css">
  
      <title>Team Profile</title>
  </head>
  
  <body>
  
      <div class="container-fluid bg-danger m-auto" style="height: 5rem">
          <h1 class="text-white text-center pt-3">My Team</h1>
      </div>
  
      <div class="container-fluid">
  
          <div class="container">
  
              <div class="row justify-content-center pt-5">
  
              ${cards}
  
              </div>
  
          </div>
  
      </div>
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"></script>
  </body>
  
  </html>`;
};

module.exports = htmlGenerator;
