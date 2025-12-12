interface Person {
    name: string;
    age: number;
    info(this: Person): string;
}
class Employee implements Person{
    isEmployed: boolean;
    constructor(public name: string, public age: number, isEmployed: boolean){
        this.isEmployed = isEmployed;
    }
    info(this: Person): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
let user1: Employee = new Employee("Alice", 28, true);

console.log(user1.info());
export {};