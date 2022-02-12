const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): 1) name; 2) id; 3) email; 4) officeNumber", () => {
      const john = new Manager("John", 123, "john@gmail.com", 4);

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(123);
      expect(john.email).toEqual("john@gmail.com");
      expect(john.officeNumber).toEqual(4);
    });
    it("should default to an officeNumber of 1 if none is provided", () => {
      const john = new Manager("John", 123, "john@gmail.com");

      expect(john.officeNumber).toEqual(1);
    });
    it("should give that object a getName() method which returns its name property", () => {
      const john = new Manager("John", 123, "john@gmail.com", 4);

      expect(john.getName()).toEqual("John");
    });
    it("should give that object a getID() method which returns its id property", () => {
      const john = new Manager("John", 123, "john@gmail.com", 4);

      expect(john.getId()).toEqual(123);
    });
    it("should give that object a getEmail() method which returns its email property", () => {
      const john = new Manager("John", 123, "john@gmail.com", 4);

      expect(john.getEmail()).toEqual("john@gmail.com");
    });
    it("should give that object a getRole() method which returns its role type", () => {
      const john = new Manager("John", 123, "john@gmail.com", 4);

      expect(john.getRole()).toEqual("Manager");
    });
  });
  describe("Validation", () => {
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Manager();

      expect(cb).toThrow();
    });
    it("should throw an error if only a name and id are provided", () => {
      const cb = () => new Manager("John", 123);

      expect(cb).toThrow();
    });
    it("should throw an error if only a name is provided", () => {
      const cb = () => new Manager("John");

      expect(cb).toThrow();
    });
    it("should throw an error if a non-string name is provided", () => {
      const cb = () => new Manager(14, 123, "john@gmail.com", 4);

      expect(cb).toThrow();
    });
    it("should throw an error if non-numeric id is provided", () => {
      const cb = () => new Manager("John", "123", "john@gmail.com", 4);

      expect(cb).toThrow();
    });
    it("should throw an error if non-string email is provided", () => {
      const cb = () => new Manager("John", 123, true, 4);

      expect(cb).toThrow();
    });
    it("should throw an error if an invalid email address is provided", () => {
      const cb = () => new Manager("John", 123, "john@gmail.", 4);

      expect(cb).toThrow();
    });
    it("should throw an error if a non-numeric officeNumber is provided", () => {
      const cb = () => new Manager("John", 123, "john@gmail.com", "four");

      expect(cb).toThrow();
    });
  });
});
