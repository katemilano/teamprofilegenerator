const { identifier } = require("@babel/types");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Kate";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const id = "1";
    const e = new Employee(id);
    expect(e.id).toBe(id);
});

test("Can set id via constructor arguments", () => {
    const email = "catherine.ann.milano@gmail.com";
    const e = new Employee(email);
    expect(e.email).toBe(email);
});