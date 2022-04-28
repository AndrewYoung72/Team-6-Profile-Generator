
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }

  getGithub() {
    inquirer.prompt([{
      name: 'gitHub',
      message: 'Please enter your GitHub address.',
      type: 'input'
    }])
  }

  getRole() {
    return 'Engineer'
  }

}

module.exports =  Engineer;