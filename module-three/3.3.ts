{
// type guards

// typeof --> type guard
type AlphaNumeric = string | number
const add = (param1: AlphaNumeric, param2: AlphaNumeric): string | number => {
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}
const result1 = add(2,4)

}