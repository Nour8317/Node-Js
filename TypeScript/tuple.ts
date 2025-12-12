let tUser:[number, string, boolean];
tUser = [1, "John Doe", true];

console.log(tUser);
tUser[0] = 2; // valid
tUser[1] = "Jane Doe"; // valid
tUser[2] = false; // valid      
tUser.push(3); // valid but not recommended
console.log(tUser);




export {};