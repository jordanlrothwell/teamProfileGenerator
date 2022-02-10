const Employee = require('../lib/Employee.js')

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): 1) name; 2) id; 3) email", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(123);
      expect(john.email).toEqual("john@gmail.com");
    });
    it("should give that object a getName() method which returns its name property", () => {
      const johnson = new Employee("Johnson", 456, "johnson@gmail.com");

      expect(johnson.getName()).toEqual("Johnson");
    })
  });
});
