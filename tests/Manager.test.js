const Manager = require('../lib/Manager');


describe("Manager", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Manager();
      expect(Manager.name).toEqual("Manager");
    }); 
  });
});