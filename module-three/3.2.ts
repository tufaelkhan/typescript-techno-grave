{
// oop -> inheritance
class Parent{
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


class Student{
    constructor(public name:string, public age:number, public address: string){ }
    getSleep(numberOfHours: number){
        console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
}
const Student1 = new Student('tufael', 23, 'topurchandi')

class Teacher{
    constructor(public name:string, public age:number, public address: string, public designation: string){ }
    getTakeClass(numberOfClass: number){
        console.log(`${this.name} will take class ${numberOfClass}`);
    }
}
const Teacher1 = new Teacher('tufael', 23, 'chandpur', 'professor')

}