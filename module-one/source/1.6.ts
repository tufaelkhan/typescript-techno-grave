// learn function
// 1. normal function
// 2. arrow function

function add(num1:number, num2:number = 10){
    return num1 + num2;
}
add(4, 2)

const addArrow(num1:number, num2:number): number => num1 + num2