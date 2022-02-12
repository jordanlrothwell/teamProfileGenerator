const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialisation", () => {
    it("should create an object with the following properties (if provided valid arguments): 1) name; 2) id; 3) email; 4) github", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.name).toEqual("John");
      expect(john.id).toEqual(123);
      expect(john.email).toEqual("john@gmail.com");
      expect(john.github).toEqual("johnhub");
    });
    it("should give that object a getName() method which returns its name property", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.getName()).toEqual("John");
    });
    it("should give that object a getID() method which returns its id property", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.getId()).toEqual(123);
    });
    it("should give that object a getEmail() method which returns its email property", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.getEmail()).toEqual("john@gmail.com");
    });
    it("should give that object a getGithub() method which returns its github property", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.getGithub()).toEqual("johnhub");
    });
    it("should give that object a getRole() method which returns its role type", () => {
      const john = new Engineer("John", 123, "john@gmail.com", "johnhub");

      expect(john.getRole()).toEqual("Engineer");
    });
  });
  describe("Validation", () => {
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Engineer();

      expect(cb).toThrow();
    });
    it("should throw an error if no github username is provided", () => {
      const cb = () => new Engineer("John", 123, "john@gmail.com");

      expect(cb).toThrow();
    });
    it("should throw an error if no email or github username is provided", () => {
      const cb = () => new Engineer("John", 123);

      expect(cb).toThrow();
    });
    it("should throw an error if only a name is provided", () => {
      const cb = () => new Engineer("John");

      expect(cb).toThrow();
    });
    it("should throw an error if a non-string name is provided", () => {
      const cb = () => new Engineer(14, 123, "john@gmail.com", "johnhub");

      expect(cb).toThrow();
    });
    it("should throw an error if non-numeric id is provided", () => {
      const cb = () => new Engineer("John", "123", "john@gmail.com", "johnhub");

      expect(cb).toThrow();
    });
    it("should throw an error if non-string email is provided", () => {
      const cb = () => new Engineer("John", 123, true, "johnhub");

      expect(cb).toThrow();
    });
    it("should throw an error if non-string github username is provided", () => {
      const cb = () => new Engineer("John", 123, "john@gmail.com", 456);

      expect(cb).toThrow();
    });
    it("should throw an error if an invalid email address is provided", () => {
      const cb = () => new Engineer("John", 123, "john@gmail.", "johnhub");

      expect(cb).toThrow();
    });
  });
});
