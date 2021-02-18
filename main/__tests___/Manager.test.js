const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe('Intern', () => {
    it('should create an object', () => {
        const result = new Manager();
        expect(typeof(result)).toBe("object");
    });
});

describe('Kate', () => {
    it('should set the name to Kate', () => {
        const name = 'Kate';
        const obj = new Manager(name);
        expect((obj.name)).toEqual(name);
    });
});

describe('Id', () => {
    it('should set the id to 12', () => {
        const id = "12";
        const obj = new Manager(name, id);
        expect((obj.id)).toEqual(id);
    });
});

describe('email', () => {
    it('should set the email to catherine.ann.milano@gmail.com', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const obj = new Manager(name, id, email);
        expect((obj.email)).toEqual(email);
    });
});

describe('Office Number', () => {
    it('should set the github to katemilano', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const officeNumber = "0000000000";
        const obj = new Manager(name, id, email, officeNumber);
        expect((obj.officeNumber)).toEqual(officeNumber);
    });
});
