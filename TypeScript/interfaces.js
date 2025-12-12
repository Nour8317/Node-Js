"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, age, isEmployed) {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
    Employee.prototype.info = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
var user1 = new Employee("Alice", 28, true);
console.log(user1.info());
