const Employee = require('../lib/Employee');


describe("Employee", () => {
  describe("name", () => {
    it("should return a 'string' not a number.", () => {
      const obj = new Employee();
      expect("string" in obj).toEqual(true);
    }); 
  });
});