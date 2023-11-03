{

// union type
// type FrontendDeveloper = 'fakibaz developer' | 'junior developer'
// type FullstackDeveloper = 'frontend developer' | 'expert developer'

// type Developer = FrontendDeveloper | FullstackDeveloper

// const newDeveloper: FrontendDeveloper = 'junior developer'


// type User = {
//     name: string;
//     email?: string;
//     gender: 'male' | 'female';
//     bloodGroup: 'A+' | 'O+' | 'AB+';
// }
// const user1: User = {
//     name: 'tufael',
//     gender: 'male',
//     bloodGroup: 'O+'
// }

// intersection
type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

const fullStackDeveloper: FullstackDeveloper = {
    skills: ['html', 'css', 'javascript'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
}

}