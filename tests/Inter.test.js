const Intern = require('../lib/Intern');


describe("Intern", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
     
      expect(Intern.name).toEqual("Intern");
    }); 
  });

  describe("getid", () => {
    it("should return the new Intern's ID number.", () => {
      // Arrange
      const id = 2;
      //Act
      const obj = new Intern(this.id);
      //Assert
      expect(obj.id).toEqual(this.id);

    }); 
  });

  describe("getEmail", () => {
    it("should return the new Intern's email address.", () => {
      // Arrange
      const email = "mmawy@aol.com";
      //Act
      const obj = new Intern(this.email);
      //Assert
      expect(obj.email).toEqual(this.email);

    }); 
  });



});