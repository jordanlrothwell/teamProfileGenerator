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
const generateCards = function () {
  for (const employee of employeesArr) {
    if ("officeNumber" in employee) {
      var newEmployee = new Manager(
        employee.name,
        employee.id,
        employee.email,
        employee.officeNumber
      );
    } else if ("github" in employee) {
      var newEmployee = new Engineer(
        employee.name,
        employee.id,
        employee.email,
        employee.github
      );
    } else {
      var newEmployee = new Intern(
        employee.name,
        employee.id,
        employee.email,
        employee.school
      );
    }
    const icon = `./dist/icons/${newEmployee.getRole()}.svg`
    const newCard = `<div class="col-4 pb-5">
        <div class="card shadow" style="width: 18rem">
            <div class="card-header bg-primary">
                <h5 class="card-title text-white pt-1">${newEmployee.name}</h5>
                <div class="d-inline-flex align-items-center">
                    <img class="align-items-center" src="${icon}" alt="coffee">
                    <h6 class="card-title text-white mb-0 p-1">${newEmployee.getRole()}</h6>
                </div>
            </div>
            <div class="card-body bg-light pt-4 pb-5">
                <ul class="list-group pt-2">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">Dynamic: </li>
                </ul>
            </div>
        </div>`;
  }
};

generateCards();

const employeeCard = function (newEmployee) {
  return;
};

const htmlGenerator = function (newEmployee) {
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
    

    
                </div>
    
            </div>
    
        </div>
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
};
