const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): 1) name; 2) id; 3) email; 4) school", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(123);
      expect(john.email).toEqual("john@gmail.com");
      expect(john.school).toEqual("St. Johns High");
    });
    it("should give that object a getName() method which returns its name property", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.getName()).toEqual("John");
    });
    it("should give that object a getID() method which returns its id property", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.getId()).toEqual(123);
    });
    it("should give that object a getEmail() method which returns its email property", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.getEmail()).toEqual("john@gmail.com");
    });
    it("should give that object a getschool() method which returns its school property", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.getSchool()).toEqual("St. Johns High");
    });
    it("should give that object a getRole() method which returns its role type", () => {
      const john = new Intern("John", 123, "john@gmail.com", "St. Johns High");

      expect(john.getRole()).toEqual("Intern");
    });
  });
  describe("Validation", () => {
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });
    it("should throw an error if no school is provided", () => {
      const cb = () => new Intern("John", 123, "john@gmail.com");

      expect(cb).toThrow();
    });
    it("should throw an error if no email or school is provided", () => {
      const cb = () => new Intern("John", 123);

      expect(cb).toThrow();
    });
    it("should throw an error if only a name is provided", () => {
      const cb = () => new Intern("John");

      expect(cb).toThrow();
    });
    it("should throw an error if a non-string name is provided", () => {
      const cb = () => new Intern(14, 123, "john@gmail.com", "St. Johns High");

      expect(cb).toThrow();
    });
    it("should throw an error if non-numeric id is provided", () => {
      const cb = () => new Intern("John", "123", "john@gmail.com", "St. Johns High");

      expect(cb).toThrow();
    });
    it("should throw an error if non-string email is provided", () => {
      const cb = () => new Intern("John", 123, true, "St. Johns High");

      expect(cb).toThrow();
    });
    it("should throw an error if non-string school is provided", () => {
      const cb = () => new Intern("John", 123, "john@gmail.com", 456);

      expect(cb).toThrow();
    });
    it("should throw an error if an invalid email address is provided", () => {
      const cb = () => new Intern("John", 123, "john@gmail.", "St. Johns High");

      expect(cb).toThrow();
    });
  });
});
