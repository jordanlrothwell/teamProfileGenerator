const Employee = require('../lib/Employee.js')

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): name; id; email", () => {
      const john = new Employee("John", 1, "john@gmail.com");

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(1);
      expect(john.email).toEqual("john@gmail.com");
    });
  });
});
