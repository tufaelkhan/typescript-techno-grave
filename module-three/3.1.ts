{
// oop => class
class Animal{
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties
    constructor(public name:string, public species:string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('jarman shaper bhai', 'dog','ghew ghew')
const cat = new Animal('maklu', 'cat', 'meaw meaw')
dog.makeSound();


}