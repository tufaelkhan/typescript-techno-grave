{
// function with generic
const createArray = (param: string): string[] => {
    return [param]
}
const createArrayWithGeneric = <T>(param: T):T[] => {
    return [param]
}
const result1 = createArray('tufael')
const resultGeneric = createArrayWithGeneric<string>('false')

type User = {id: number; name: string}
const resultGenericObj = createArrayWithGeneric<User>({id: 133, name: 'tufael'})



// const createArray = (param: string): string[] => {
//     return [param]
// }
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
}
const res1 = createArrayWithTuple<string, number>('tufael', 222)
const res2 = createArrayWithTuple<string, {name: string}>('bangladesh', {name: 'asia'})

const addCourseToStudent = <T>( student: T ) =>{
    const course = 'next level development'
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: 'tufael', email: 'tufael@gmail.com', devType: 'next level developer'})

const student2 = addCourseToStudent({name: 'sujoy', email: 'sujoy@gmail.com', devType: 'next level developer', hasWatch: 'apple watch'})

}