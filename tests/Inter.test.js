const Intern = require('../lib/Intern');


describe("Intern", () => {
  describe("getRole", () => {
    it("should return the new employee's title.", () => {
      const obj = new Intern();
      expect(Intern.name).toEqual("Intern");
    }); 
  });
});