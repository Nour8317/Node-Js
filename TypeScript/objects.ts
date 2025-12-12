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


type cardNumber = {
    litters : string,
    numbers : number
}
type cardDate = {
    month : number,
    year : number
}
type cardCvv = {
    cvv : number
}
type cardDetails = cardNumber & cardDate & cardCvv;

let cardDetails1 : cardDetails = {
    litters : "Visa",
    numbers : 1234567890123456,
    month : 12,
    year : 2025,
    cvv : 123
};
console.log(cardDetails1);


export {}; 