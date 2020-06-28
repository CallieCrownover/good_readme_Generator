const inquirer = require('inquirer');
const fs = require("fs");

//array of questions for user
inquirer
  .prompt([
      {
        type: "input",
        message: "Project Title: ",
        name: "title"
      },
      {
        type: "input",
        message: "Project Description: ",
        name: "description"
      },
      {
        type: "list",
        message: "Public or Private?",
        choices: [
          "Private",
          "Public", 
        ],
        name: "access",
      },
      {
        type: 'checkbox',
        choices: ['Apache License 2.0', 'GNU LGPLv3', 'GNU AGPLv3', 'MIT License'],
        message: 'Which licenses did you use?',
        name: 'license'
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      }
    ])

.then(function(response) {
    let today = new Date();
    let year = today.getFullYear();
    // badge for license
    let badge;

  // create the README doc
  const readmeInputs = `
  # ${response.title}
  ${badge}
  ## Description
  ${response.description}
  ## Table of Contents:
    1. [Title](#Title)
    2. [Desscription](#Description)
    3. [Access](#Access)
    4. [License](#License)
      ${response.license}
    5. [Questions](#Questions)
  ## Title
  ## Access
      ${response.access}
  # Questions
  If you have any questions or concerns, please contact ${response.username} by emailing ${response.email}
  `
  console.log(response);
  
    // write the README, tell user the file has been created
    fs.writeFile(`${response.title}__README.md`, readmeInputs, function(err){
      if (err){
          return console.log(err);
      }
      console.log("Hooray! Your README.md file has been generated!")
    })
  
  });



