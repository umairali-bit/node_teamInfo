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

const employeeData =[];


const prompts = () =>{
    return inquirer
    .prompt([



        {
            type: "input",
            message: "Please enter the team's manager name:",
            name: "name"

        },
        {
            type: "input",
            message: "Please enter the team's manager ID:",
            name: "id"

        },
        {
            type: "input",
            message: "Please enter the team's manager email:",
            name: "email"

        },
        {
            type: "input",
            message: "Please enter the team's manager office number:",
            name: "officeNumber"

        },
       {
         message: "what will be the Employee Role",
         type: "list",
         name: "role",
         choices: ["Engineer", "Intern", "Im done"],
       },

        {
            type: "input",
            message: "Please enter the Engineer's name:",
            name: "nameE",
            when: ({ role }) => {
                if (role === 'Engineer') return true;
                else return false;
            },

        },
        {
            type: "input",
            message: "Please enter the Engineer's ID:",
            name: "idE",
            when: ({ role }) => {
                if (role === 'Engineer') return true;
                else return false;
            },

        },
        {
            type: "input",
            message: "Please enter the Engineer's email",
            name: "emailE",
            when: ({ role }) => {
                if (role === 'Engineer') return true;
                else return false;
            },

        },
        {
          message: "Please enter your Github username: (Required)",
          type: "input",
          name: "gitHub",
          when: ({role}) => {
            if(role === 'Engineerccad') return true;
            else return false;
            },
        
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("please add you GITHUB user name");
              return false;
            }
          },
        },
        {
            type: "input",
            message: "Please enter the Intern's name:",
            name: "nameI",
            when: ({role}) => {
                if(role === 'Intern') return true;
                else return false;
                },

        },
        {
            type: "input",
            message: "Please enter the Intern's ID:",
            name: "idI",
            when: ({role}) => {
                if(role === 'Intern') return true;
                else return false;
                },

        },
        {
            type: "input",
            message: "Please enter the Intern's email:",
            name: "emailI",
            when: ({role}) => {
                if(role === 'Intern') return true;
                else return false;
                },

        },
        {
            message: "Where did the Intern went to school",
            type: "input",
            name: "school",
            when: ({role}) => {
                if(role === 'Intern') return ture;
                else return false;
                },
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("please provide your INTERN  school");
                return false;
              }
            },
          },
          {
            message: "would you like to add another Employee",
            type: "confirm",
            name: "confirmEmployee",
          },
      ])
  
    }

    prompts()
    .then((data) => {
        console.log(data);
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        employeeData.push(manager);

        if (data.role === "Engineer") {
            const engineer = new Engineer(
                data.nameE,
                data.idE,
                data.emailE,
                data.gitHub
                );
                employeeData.push(engineer);
        
            
          } else if (data.role === "Intern") {
            const intern = new Intern(
                data.nameI,
                data.idI,
                data.emailI,
                data.school
                );
                employeeData.push(intern);
          }

          if (data.confirmEmployee === true) {
            prompts();
        } else {
          createMember();
        }
    });

    function createMember() {
        fs.existsSync(OUTPUT_DIR) || fs.mkdirSync(OUTPUT_DIR)
      
        fs.writeFileSync(outputPath, render(employeeData), "utf-8", err => {
        
        if (err) throw new Error(err);

      console.log('created');
         
      }
        )
    }
  
   
    


        
  
       
     
    
    
    
    


  






        
             
            
    
    
        
           
                 
        
       
     
    
   

    
    
    
    
   

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
