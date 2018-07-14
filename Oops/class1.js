/* Classes in ES6 */

class Person {
    constructor(id) {
        this.ID= id;
    }
}

class Employee extends Person {
    constructor(id, name, email) {
        super(id);

        this.Name = name;
        this.Email = email;
    }
}

var p1 = new Employee(1001,"Ram","ram@abc.com");
console.log(`Person details : ID: ${p1.ID} Name: ${p1.Name} Email: ${p1.Email}`);