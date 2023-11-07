{
// abstraction  1. interface    2. abstract
// idea
interface Vehicle1{
    startEngine():void
    stopEngine():void
    move():void
}
// const vehicle1:Vehicle1 = {
//     name: 'toyota',
//     model: 2000,
// }

// real implementation
class Car1  implements Vehicle1{
    startEngine(): void {
        console.log('I am starting the car engine');
    }
    stopEngine(): void {
        console.log('I am stop the engine');
    }
    move(): void {
        console.log('move the car');
    }
    test(){
        console.log('i am test the engine');
    }
}

const toyotaCar = new Car1()
toyotaCar.startEngine()

// abstract class
// idea
abstract class Car2{
    abstract startEngine(): void 
    abstract stopEngine(): void
    abstract move(): void
    test(){
        console.log('i am test the engine');
    }
}

class ToyotaCar extends Car2{
    startEngine(): void {
        console.log('I am starting the car engine');
    }
    stopEngine(): void {
        console.log('I am stopping the car engine');
    }
    move(): void {
        console.log('I am move the car engine');
    }
}

const hondacar = new Car2()
hondacar.startEngine()


}