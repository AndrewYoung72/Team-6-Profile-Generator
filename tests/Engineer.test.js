const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Engineer();
      expect(Engineer.name).toEqual("Engineer");
    }); 
  });

  describe("getid", () => {
    it("should return the new Engineer's ID number.", () => {
      // Arrange
      const id = 5;
      //Act
      const obj = new Engineer(this.id);
      //Assert
      expect(obj.id).toEqual(this.id);

    }); 
  });

  describe("getEmail", () => {
    it("should return the new Engineer's email address.", () => {
      // Arrange
      const email = "mmawy@aol.com";
      //Act
      const obj = new Engineer(this.email);
      //Assert
      expect(obj.email).toEqual(this.email);

    }); 
  });
  
  



});