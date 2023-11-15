{
const keyValueArray: [string, any][] = [
    ["id", 10],
    ["name", "habib"],
    ["marrid", true],
]

const valueObj = {
    id: 10,
    name: 'habib',
    marrid: true
}
function arrayToObject<T extends string, U >(array: [T, U[]]): Record<T, U> {
    const transformObject = array.reduce((finalObject, [key, value]) =>{
        if(value.length > 0){
            finalObject[key] = value[0]; 
        }
        return finalObject
        }, {} as Record<T, U>);
        return transformObject;
}
console.log(arrayToObject(valueObj));

}