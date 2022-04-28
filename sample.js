const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require('./generateHTML');
const fs = require("fs");

const teamArray = [];

const createManager = () => {
  // ask for manager details
  inquirer.prompt([
    {
      type: "input",
      name: "teamManager",
      message: "Please enter the team manager's name.",
    }
  ])
  .then((answers) => {
    // answers.teamManager ---> "John"
    // using the answers, create a new Manager object using the class
    const newManager = new Manager(answers.teamManager, 1, "test@mail.com", 123)
    // add the new Manager in a "basket"
    teamArray.push(newManager)

    menu();
  })
  
}

const menu = () => {
  console.log(teamArray)
  inquirer.prompt({
      type: "list",
      name: "options",
      message: "Choose an option using the arrow keys.",
      choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building team",
      ]
    })
    .then((answer) => {
      if(answer.options == "Add an engineer") {
        createEngineer()
      } else if(answer.options == "Add an intern") {
        createIntern()
      } else {
        finishBuild()
      }
    })
}

const createEngineer = () => {
  // ask for engineer details
  inquirer.prompt([
    {
      type: "input",
      name: "teamEngineer",
      message: "Please enter the team engineer's name.",
    }
  ])
  .then((answers) => {
    // using the answers, create a new con
    // add the new Engineer in a "basket"
    const newEngineer = new Engineer(answers.teamEngineer, )
    teamArray.push(newEngineer)
    menu();
  })
}

const createIntern = () => {
  // ask for engineer details
  inquirer.prompt([
    {
      type: "input",
      name: "teamIntern",
      message: "Please enter the team intern's name.",
    }
  ])
  .then((answers) => {
    const newIntern = new Intern(answers.teamIntern, )
    teamArray.push(newIntern)
    menu();
  })
}

const finishBuild = () => {
  const generatedOutput = generateHTML(teamArray);

  console.log(generatedOutput);

  
  
  console.log("Finish build!")
}

createManager()