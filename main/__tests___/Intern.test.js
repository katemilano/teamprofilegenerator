const { identifier } = require("@babel/types");
const { describe } = require("yargs");
const Engineer = require("../lib/Intern.js");

test("Can instantiate Engineer instance", () => {
    const i = new Intern();
    expect(typeof(i)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Kate";
    const i = new Intern(name);
    expect(i.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const id = "1";
    const i = new Intern(id);
    expect(i.id).toBe(id);
});

test("Can set email via constructor arguments", () => {
    const email = "camilano@ncsu.edu";
    const i = new Intern(email);
    expect(i.email).toBe(email);
});

test("Can set school via constructor arguments", () => {
    const school = "NC State";
    const i = new Intern(school);
    expect(i.school).toBe(school);
});