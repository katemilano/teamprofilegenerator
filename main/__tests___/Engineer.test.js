const { identifier } = require("@babel/types");
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer.js");

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Kate";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const id = "1";
    const e = new Engineer(id);
    expect(e.id).toBe(id);
});

test("Can set email via constructor arguments", () => {
    const email = "camilano@ncsu.edu";
    const e = new Engineer(email);
    expect(e.email).toBe(email);
});

test("Can set github via constructor arguments", () => {
    const github = "katemilano";
    const e = new Engineer(github);
    expect(e.github).toBe(github);
});