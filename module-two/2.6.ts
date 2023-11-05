{
// constraints
const addCourseToStudent = <T extends { id:number; name:string; email:string}>( student: T ) =>{
    const course = 'next level development'
    return {
        ...student,
        course
    }
}

const student3 = addCourseToStudent({id:3, name: 'jahid', email:'jahid@gmail.com', job: true})

const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({id: 1, name: 'tufael', email: 'tufael@gmail.com', devType: 'next level developer'})

const student2 = addCourseToStudent({id: 2, name: 'sujoy', email: 'sujoy@gmail.com', devType: 'next level developer', hasWatch: 'apple watch'})

}