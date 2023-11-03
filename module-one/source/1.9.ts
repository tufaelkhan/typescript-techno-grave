{
// Type alias
type Student= {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}
const student1: Student ={
    name: 'tufael',
    age: 23,
    gender: 'male',
    address: 'Kasem Bazar',
}
const student2: Student = {
    name: 'mehedi',
    age: 20,
    gender: 'male',
    contactNo: '015000058',
    address: 'Kasem Bazar',
}
const student3: Student = {
    name: 'jahid',
    age: 25,
    gender: 'male',
    contactNo: '646596596',
    address: 'Moishadi',
}

type UserName = string
type IsAdmin = boolean
const userName: UserName = 'tufael'
const isAdmin: IsAdmin = false


type Add = (num1:number, num2:number) => number;
const add: Add = (num1, num2) => num1 + num2

}