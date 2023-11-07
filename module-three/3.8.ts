{
// polymorphism
class Person{
    getSleep(){
        console.log('I am sleeping eight hours per day');
    }
}
class Student extends Person{
    getSleep(){
        console.log('I am sleeping seven hours per day');
    }
}
class Developer extends Person{
    getSleep(){
        console.log('I am sleeping six hours per day');
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepingHours(person1)
}