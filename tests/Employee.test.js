const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): 1) name; 2) id; 3) email", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(123);
      expect(john.email).toEqual("john@gmail.com");
    });
    it("should give that object a getName() method which returns its name property", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.getName()).toEqual("John");
    });
    it("should give that object a getID() method which returns its id property", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.getId()).toEqual(123);
    });
    it("should give that object a getEmail() method which returns its email property", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.getEmail()).toEqual("john@gmail.com");
    });
    it("should give that object a getRole() method which returns its role type", () => {
      const john = new Employee("John", 123, "john@gmail.com");

      expect(john.getRole()).toEqual("Employee");
    });
  });
});
