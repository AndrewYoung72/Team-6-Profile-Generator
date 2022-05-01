const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Engineer();
      expect(Engineer.name).toEqual("Engineer");
    }); 
  });
});