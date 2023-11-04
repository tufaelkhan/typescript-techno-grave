{
// interface
type User1 = {
    name: string;
    age: number;
}

type UserWithRoll1 = User1 & {role: string}

const user1: UserWithRoll2= {
    name: 'tufael',
    age: 23,
    role: 'student'
}

interface User2 {
    name: string;
    age: number
}
interface UserWithRoll2 extends User1{
    role: string
}

type RollNumber = number

// js ---> object, array ---> object, function ---> object.
type Roll1 = number[];
interface Roll2 {
    [index : number] : number
}
const rollNumber1: Roll1 = [ 2, 4, 6, 8, 10, 12]

// function alias
type Add1 = (num1: number, num2: number) => number
interface Add2{
    (num1: number, num2: number) : number
}
const add: Add2 = (num1, num2) => num1 + num2

}