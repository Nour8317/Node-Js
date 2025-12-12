//union is a data type that can hold multiple types of values
type stringOrNumber = string | number; // thats a new type now

let var1 : stringOrNumber;
var1 = "hello";
console.log(var1);
var1 = 123;
console.log(var1);