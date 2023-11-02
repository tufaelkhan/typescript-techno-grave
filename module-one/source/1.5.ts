//  Reference type ---> object
const user: {
    readonly company: string; // type --> literal type
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: 'programming hero',
    firstName: 'tufael',
    lastName: 'khan',
    isMarried: true,
}
