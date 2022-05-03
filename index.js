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
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number.",
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
  .then((answers) => {
    // answers.teamManager ---> "John"
    // using the answers, create a new Manager object using the class
    const newManager = new Manager(answers.teamManager, answers.id, answers.email, answers.officeNumber)
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
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub address.",
    },
    
  ])
  .then((answers) => {
    // using the answers, create a new con
    // add the new Engineer in a "basket"
    const newEngineer = new Engineer(answers.teamEngineer, answers.id, answers.email, answers.github )
    teamArray.push(newEngineer)
    menu();
  })
}

const createIntern = () => {
  // ask for intern details
  inquirer.prompt([
    {
      type: "input",
      name: "teamIntern",
      message: "Please enter the team intern's name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your school name.",
    },

  ])
  .then((answers) => {
    const newIntern = new Intern(answers.teamIntern, answers.id, answers.email, answers.github )
    teamArray.push(newIntern)
    menu();
  })
}

const finishBuild = () => {
  const generatedOutput = generateHTML(teamArray);

  console.log('Finished');
  
  console.log("Finish build! Now generate your HTML!");
  fs.writeFile('index.html', generatedOutput, (err) =>
  err ? console.error(err) : console.log('Your html was created!'))
};



createManager()