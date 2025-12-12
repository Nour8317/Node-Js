let arr:string[]=[];

arr.push("hello")
arr.push("world")
arr.push("from")
arr.push("TypeScript")
console.log(arr.map((value:string)=>{
    value = value.toUpperCase();
    return value;
}))
console.log(arr[0]);
