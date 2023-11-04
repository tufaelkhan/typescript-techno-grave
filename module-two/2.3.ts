{
// generic type
type GenericArray<T> = Array<T>
// const rollNumbers: number[] = [2, 4, 6, 8]
const rollNumbers: GenericArray<number> = [2, 4, 6, 8]

// const mentors: string[] = [ 'mx', 'x', 'y', 'z']
const mentors: GenericArray<string> = [ 'mx', 'x', 'y', 'z']

// const BoolArray: boolean[] = [ true, false, false, true]
const BoolArray: GenericArray<boolean> = [ true, false, false, true ]

type Person = {
    name: string;
    age: number;
}
const user: GenericArray<Person> = [
    {
        name: 'tufael',
        age: 23,
    },
    {
        name: 'sujoy',
        age: 23,
    },
]

const add = (x:number, y:number) => x+y;
add(30, 20)

type GenericTuple<x, y> = [x, y]
const manus: GenericTuple<string, string> = [ 'mr.x', 'ms.x']

const UserWithId: GenericTuple<number, {name:string, email:string}> = [ 123, {name: 'tufael', email: 'tufael.gmail.com'}]


}