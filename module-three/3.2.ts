{
// oop -> inheritance
class Person{
    name: string;
    age: number;
    address: string;
    constructor(name:string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numberOfHours: number){
        console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
}


class Student extends Person{
    constructor(name:string, age:number, address: string){
        super(name, age, address)
     }
}
const Student1 = new Student('tufael', 23, 'topurchandi')

class Teacher extends Person{
    designation:string;
    constructor(name:string, age:number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation;
     }
    getTakeClass(numberOfClass: number){
        console.log(`${this.name} will take class ${numberOfClass}`);
    }
}
const Teacher1 = new Teacher('tufael', 23, 'chandpur', 'professor')


}