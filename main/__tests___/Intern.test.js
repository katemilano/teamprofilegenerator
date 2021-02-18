const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should create an object', () => {
        const result = new Intern();
        expect(typeof(result)).toBe("object");
    });
});

describe('name', () => {
    it('should set the name to Kate', () => {
        const name = 'Kate';
        const obj = new Intern(name);
        expect((obj.name)).toEqual(name);
    });
});

describe('ID', () => {
    it('should set the id to 12', () => {
        const id = '12';
        const obj = new Intern(name, id);
        expect((obj.id)).toEqual(id);
    });
});

describe('email', () => {
    it('should set the email to catherine.ann.milano@gmail.com', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const obj = new Intern(name, id, email);
        expect((obj.email)).toEqual(email);
    });
});

describe('school', () => {
    it('should set the school to NC State', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const school = "NC State";
        const obj = new Intern(name, id, email, school);
        expect((obj.school)).toEqual(school);
    });
});