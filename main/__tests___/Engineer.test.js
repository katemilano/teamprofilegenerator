const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('should create an object', () => {
        const result = new Engineer();
        expect(typeof(result)).toBe("object");
    });
});

describe('Name', () => {
    it('should set the name to Kate', () => {
        const name = 'Kate';
        const obj = new Engineer(name);
        expect((obj.name)).toEqual(name);
    });
});

describe('Id', () => {
    it('should set the id to 12', () => {
        const id = "12";
        const obj = new Engineer(name, id);
        expect((obj.id)).toEqual(id);
    });
});

describe('email', () => {
    it('should set the email to catherine.ann.milano@gmail.com', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const obj = new Engineer(name, id, email);
        expect((obj.email)).toEqual(email);
    });
});

describe('github', () => {
    it('should set the github to katemilano', () => {
        const id = "12";
        const email = "catherine.ann.milano@gmail.com";
        const github = "katemilano";
        const obj = new Engineer(name, id, email, github);
        expect((obj.github)).toEqual(github);
    });
});


