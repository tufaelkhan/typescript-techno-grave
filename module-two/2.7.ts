{
// generic constraints with keyof operator
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}
type Owner = 'bike' | "car" | 'ship'
type Owner2 = keyof Vehicle;

const person1: Owner2 = 'ship'

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
}
const user = {
    name: 'tufael',
    age: 23,
    address: 'chandpur',
}
const car = {
    model: 'toyota',
    year: 23,
}
const result1 = getPropertyValue(car, 'model')


// obj['age']



}