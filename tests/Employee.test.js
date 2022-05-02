const Employee = require('../lib/Employee');


describe("Employee", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Employee();
      expect(Employee.name).toEqual("Employee");
      
    }); 
  });

});

