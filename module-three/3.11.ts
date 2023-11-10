function InputTake(input: string | number): number | undefined{
    if(typeof input === 'number'){
        return input * input
    }else if(typeof input === 'string'){
        return input.length
    }
}
// const result = InputTake('tufael khan')
console.log(InputTake('tufael khan chandpur'));

interface Person{
    name?: string;
    phone?: string;
    address?: {
        city?: string;
        street?: string;
    }
}
function getAddressCity(TakeArgument: Person): string | undefined{
    return TakeArgument?.address?.city
}

const Address: Person = {
    address:{
        city: 'hazigong',
        street: 'gt road',
    }
}

const result2 = getAddressCity(Address)
console.log(result2);

class Cat{
    name?: string;
    age?: number;

    constructor(name?: string, age?: number){
        this.name = name;
        this.age = age;
    }
}

function isCat(obj: any): obj is Cat{
    return obj instanceof Cat
}
const myCat = new Cat('khan', 22)
const myPeat = { species: "Dog"  }
if(isCat(myPeat)){
    console.log('yes it is my cat');
}else{
    console.log('it is not my cat');
}


// let arr: any[] = [3, 4, 'fsdf', 3, 5,8, 'tufael', 'khan'];

// let numArray: number[] = arr.filter(item => typeof item === 'number') as number[];

// console.log(numArray);

type ArrayItems =  string | number

function Total(arr: ArrayItems[]): number | undefined{
    let sum = 0
    for(let elements of arr){
        if(typeof elements === 'number'){
            sum += elements
        }
    }
    return sum
}

const num1: ArrayItems[] = [13, 7, 'fsdf', 50, 'tufael', 20];
// const result = Total(num1);
console.log(Total(num1)); 


interface Car{
    make: string;
    model: string;
    year: number;
}
interface Driver{
    name: string;
    licenseNumber: string;
}

function carAndDriver(vehicle: Car, driver: Driver): { }{
    return {...vehicle, ...driver}
}
const vehicle1: Car = {make: 'toyota', model: '3535dsf', year: 2022}
const driver1: Driver = {name: 'bmw', licenseNumber: '3543gfrgfdi'}
console.log(carAndDriver(vehicle1, driver1));


function sumOfArrayNumbers(param: unknown): void{
    if(Array.isArray(param)){
        const findAllNumbers = param.every((element)=> typeof element === 'number')
        if(findAllNumbers){
            const sum = param.reduce((acc, sum) => acc + sum, 0)
            console.log('Total', sum);
        }else{
            console.log('give the array all numbers');
        }
    }else{
        console.log('give array ');
    }
}
console.log(sumOfArrayNumbers([5,5, '20']));

// function checkArrayTypes(arr: any[]): void {
//     for (let i = 0; i < arr.length; i++) {
//       const elementType = typeof arr[i];
//       console.log(`Index ${i} has type: ${elementType}`);
//     }
//   }
  
//   const mixedArray: (string | number | boolean)[] = ['hello', 42, true, 'world', 123, false];
  
//   console.log(checkArrayTypes(mixedArray));

function findFirstOccurrence<T>(arr: T[], target: T): number{
    const index = arr.findIndex((item) => item === target);
    return index !== -1 ? index : -1;
  }
  
  // Example usage:
  
  const numbers: number[] = [1, 2, 3, 4, 5, 2];
  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
  
  const targetNumber = 0;
  const targetString = "khan";
  
  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInStrings = findFirstOccurrence(strings, targetString);
  
  console.log(indexInNumbers); // Output: 1
  console.log(indexInStrings); // Output: 2
  
  
