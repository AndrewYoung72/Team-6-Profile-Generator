const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
  describe("getName", () => {
    it("should return the new engineers's name.", () => {
      const obj = new Engineer();
      expect(Engineer.name).toEqual("Engineer");
    }); 
  });
});