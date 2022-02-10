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
  describe("Validation", () => {
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });
    it("should throw an error if no email is provided", () => {
      const cb = () => new Employee("John", 123);

      expect(cb).toThrow();
    })
    it("should throw an error if only a name is provided", () => {
      const cb = () => new Employee("John");

      expect(cb).toThrow();
    })
    it("should throw an error if a non-string name is provided", () => {
      const cb = () => new Employee(14, 123, "john@gmail.com");

      expect(cb).toThrow();
    })
    it("should throw an error if non-numeric id is provided", () => {
      const cb = () => new Employee("John", "123", "john@gmail.com");

      expect(cb).toThrow();
    })
    it("should throw an error if non-string email is provided", () => {
      const cb = () => new Employee("John", "123", true);

      expect(cb).toThrow();
    })
    it("should throw an error if an invalid email address is provided", () => {
      const cb = () => new Employee("John", "123", "john@gmail.");

      expect(cb).toThrow();
    })
  });
});
