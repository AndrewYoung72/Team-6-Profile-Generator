const Manager = require('../lib/Manager');


describe("Manager", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
    
      expect(Manager.name).toEqual("Manager");
    }); 
  });

  describe("getId", () => {
    it("should return the new Manager's ID number.", () => {
      // Arrange
      const id = 5;
      //Act
      const obj = new Manager(this.id);
      //Assert
      expect(obj.id).toEqual(this.id);

    }); 
  });
  describe("getEmail", () => {
    it("should return the new Manager's email address.", () => {
      // Arrange
      const email = "mmawy@aol.com";
      //Act
      const obj = new Manager(this.email);
      //Assert
      expect(obj.email).toEqual(this.email);

    }); 
  });


});