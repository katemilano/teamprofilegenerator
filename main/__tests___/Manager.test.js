const { identifier } = require("@babel/types");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

test("Can instantiate Manager instance", () => {
    const m = new Manager();
    expect(typeof(m)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Kate";
    const m = new Manager(name);
    expect(m.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const id = "1";
    const m = new Manager(id);
    expect(m.id).toBe(id);
});

test("Can set email via constructor arguments", () => {
    const email = "camilano@ncsu.edu";
    const m = new Manager(email);
    expect(m.email).toBe(email);
});

test("Can set officeNumber via constructor arguments", () => {
    const officeNumber = "9999999999";
    const m = new Manager(officeNumber);
    expect(m.officeNumber).toBe(officeNumber);
});