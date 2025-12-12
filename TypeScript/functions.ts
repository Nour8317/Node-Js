function addNumbers(num1:number, num2:number): number{
    return num1 + num2;
}


//arrow functions
const add = (num1: number, num2: number): number => num1 + num2;
let sum: number = add(4,59);
let sum2:number = addNumbers(10,20);
console.log(sum2);


let heros = [1, "ironman", "thor", "captain america"];
heros.map((hero): number => {
    return 1
});
console.log(heros);

//void function just show the error message into the console but the program continue running
function consoleError(errmsL:string):void{
    console.log(errmsL);
}
//never function stop the program execution like creashing the program
function handleError(errmsL:string):never{
    throw new Error(errmsL);
}