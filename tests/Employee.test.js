const Employee = require('../lib/Employee');


describe("Employee", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Employee();
      expect(Employee.name).toEqual("Employee");
      
    }); 
  });
  describe("getId", () => {
    it("should return the new employee's ID number.", () => {
      // Arrange
      const id = 5;
      //Act
      const obj = new Employee(this.id);
      //Assert
      expect(obj.id).toEqual(this.id);

    }); 
  });

  describe("getEmail", () => {
    it("should return the new employee's email address.", () => {
      // Arrange
      const email = "mmawy@aol.com";
      //Act
      const obj = new Employee(this.email);
      //Assert
      expect(obj.email).toEqual(this.email);

    }); 
  });


});

