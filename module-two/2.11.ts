{
// utility type
// Pick 
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}
type NameAge = Pick<Person, 'name' | 'age'>

// Omit
type ContactInfo = Omit<Person, 'name' | 'age'>

// Required
type PersonRequired = Required<Person>

// Partial
type PersonPartial = Partial<Person>

// ReadOnly
type PersonReadOnly = Readonly<Person>
const Person1:PersonReadOnly = {
    name: 'tufael',
    age: 23,
    contactNo: '013',
}

// Record type
// type Myobj = {
//     a:string;
//     b:string;
// }

type Myobj = Record<string, string>
const EmtyObj:Record<string, unknown> = {}
const obj1:Myobj = {
    a: 'tufael',
    b: 'khan',
    c: 'log',

}

}