let User = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(User);
function createUser({name, age, isAdmin}: {name: string, age: number, isAdmin: boolean}): {name: string, age: number, isAdmin: boolean}{
    return {name, age, isAdmin};
}
createUser(User)

export {}; 