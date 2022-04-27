const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML= require("./generateHTML")

const questionPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "teamManager",
      message: "Please enter the team manager's name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your office number.",
    },
    

  ])
};







const init = () => {
  questionPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
