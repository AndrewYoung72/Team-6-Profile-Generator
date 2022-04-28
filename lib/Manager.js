const Employee = require('./Employee');

class Manager extends Employee {
  // name, id, email, officeNumber
  constructor(name, id, email, officeNumber) {
    // this.name = name;
    // this.id = id;
    // this.email = email;
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  

  getRole() {
    return `Manager`;
  }


}


module.exports =  Manager ;