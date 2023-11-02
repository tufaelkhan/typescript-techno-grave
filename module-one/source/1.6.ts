{
// learn function
// 1. normal function
// 2. arrow function

function add(num1:number, num2:number = 10){
    return num1 + num2;
}
add(4, 2)

const addArrow(num1:number, num2:number): number => num1 + num2

// object --> function --> method
const poorUser = {
    name: 'tufael',
    balance: 0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance + balance}`
    }
}
addArrow(4, 6)

const arr: number[] = [2,4, 6, 8]
const newArray: number[] = arr.map((elm:number):number => elm*elm)
}