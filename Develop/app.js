const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { exit } = require("process");

//saving employees Data
const employeeData = [];


//prompts
function employeeQuestions() {
  inquirer
    .prompt([
      {
        message: "what will be the Employee Role",
        type: "list",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
      },
      {
        message: "Whats is the name of the new Employee",
        type: "input",
        name: "name",
      },
      {
        message: "Please enter the Employee's ID Number",
        type: "input",
        name: "id",
      },
      {
        message: "whats the Employee email",
        type: "input",
        name: "email",
        },
      
    ])
    //initiallizing manager, engineer and intern functions 
    //and passing their respective different arguments
    .then((data) => {
      console.log(data);
      if (data.role === "Manager") {
        manager(data);
      } else if (data.role === "Engineer") {
        engineer(data);
      } else if (data.role === "Intern"){
          intern(data);
      }
      
    });
}
//manager function
function manager(answers) {
  inquirer
    .prompt([
      {
        message: "What is the manager Office number?",
        type: "input",
        name: "officeNumber",
      },
      {
        message: "Would you like to add another Employee",
        type: "confirm",
        name: "confirmEmployee",
      },
    ])

    .then((data) => {
      console.log(data);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        data.officeNumber
      );
      employeeData.push(manager);

      if (data.confirmEmployee === true) {
        employeeQuestions();
      } else {
        generateHtml();
      }
    });
}
//engineer function
function engineer(answers) {
  inquirer
    .prompt([
      {
        message: "Please enter the Engineer's Github user name:",
        type: "input",
        name: "gitHub",
      },
      {
        message: "Would you like to add another Employee",
        type: "confirm",
        name: "confirmEmployee",
      },
    ])
    .then((data) => {
      console.log(data);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        data.gitHub
      );
      employeeData.push(engineer);

      if (data.confirmEmployee === true) {
        employeeQuestions();
      } else {
        generateHtml();
      }
    });
}
//intern function
function intern(answers) {
  inquirer
    .prompt([
      {
        message: "Where did the Intern went to school",
        type: "input",
        name: "school"
      },
      {
        message: "would you like to add another Employee",
        type: "confirm",
        name: "confirmEmployee",
      },
    ])
    .then((data) => {
      console.log(data);
      const intern = new Intern
      (
          answers.name, 
          answers.id, 
          answers.email, 
          data.school);
      employeeData.push(intern);

      if (data.confirmEmployee) {
        employeeQuestions();
      } else {
        generateHtml();
      }
    });
}

//generateHTML fucntion 
function generateHtml() {
  fs.existsSync(OUTPUT_DIR) || fs.mkdirSync(OUTPUT_DIR)

  fs.writeFileSync(outputPath, render(employeeData), "utf-8")
  console.log("HTML generated");
}

employeeQuestions();