{
// generic type
type GenericArray<T> = Array<T>
// const rollNumbers: number[] = [2, 4, 6, 8]
const rollNumbers: GenericArray<number> = [2, 4, 6, 8]

// const mentors: string[] = [ 'mx', 'x', 'y', 'z']
const mentors: GenericArray<string> = [ 'mx', 'x', 'y', 'z']

// const BoolArray: boolean[] = [ true, false, false, true]
const BoolArray: GenericArray<boolean> = [ true, false, false, true ]

const user: GenericArray<{name:string, age: number}> = [
    {
        name: 'tufael',
        age: 23,
    },
    {
        name: 'sujoy',
        age: 23,
    },
]

const add = (x:number, y: number) => x+y;
add(30, 20)



}