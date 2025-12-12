"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(User);
function createUser(_a) {
    var name = _a.name, age = _a.age, isAdmin = _a.isAdmin;
    return { name: name, age: age, isAdmin: isAdmin };
}
createUser(User);
