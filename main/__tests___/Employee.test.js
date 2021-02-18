// const { expect, it } = require("@jest/globals");
// const { describe } = require("yargs");

const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('should create an object', () => {
        const result = new Employee();
        expect(typeof(result)).toBe("object");
    });
});

describe('Kate', () => {
    it('should set the name to Kate', () => {
        const name = 'Kate';
        const obj = new Employee(name);
        expect((obj.name)).toEqual(name);
    });
});

describe('Id', () => {
    it('should set the id to 12', () => {
        const id = "12";
        const obj = new Employee(name, id);
        expect((obj.id)).toEqual(id);
    });
});

describe('email', () => {
    it('should set the email to catherine.ann.milano@gmail.com', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const obj = new Employee(name, id, email);
        expect((obj.email)).toEqual(email);
    });
});

