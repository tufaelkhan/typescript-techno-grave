{
// instance of guard
class Animal{
    name: string;
    species: string;
    constructor(name:string, species: string){
        this.name=name;
        this.species= species;
    }
    makeSound(){
        console.log('I am making sound');
    }
}
class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log(`I am barking`);
    }
}
class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species)
    }
    meawIng(){
        console.log(`I am meawing`);
    }
}

// smart way handle use function
const isDog = (animal: Animal):animal is Dog => {
    return animal instanceof Dog
}
const isCat = (animal: Animal):animal is Cat => {
    return animal instanceof Cat
}

const getAnimal = (animal: Animal) =>{
    if(isDog(animal)){
        animal.makeBark()
    }else if(isCat(animal)){
        animal.meawIng()
    }else{
        animal.makeSound()
    }
}
const dog1 = new Dog('dog bhai', 'dog')
const cat1 = new Cat('cat bhai', 'meaw')
getAnimal(dog1)
getAnimal(cat1)
}