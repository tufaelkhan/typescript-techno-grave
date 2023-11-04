{
// nullable type
const searchName = (value:string | null) =>{
    if(value){
        console.log('searching name');
    }else{
        console.log('there is nothing to searching');
    }
}
searchName(null)

// unknown typeof
const getSpeedInMeterPerSecond = ( value: unknown) =>{
    if(typeof value === 'number'){
        const covertedSpeed = (value*1000)/3600
        console.log(`the speed is ${covertedSpeed} ms^-1`);
    }
    else if( typeof value === 'string'){
        const [result, unit] = value.split(' ')
        const covertedSpeed = (parseFloat(result)*1000)/3600
        console.log(`the speed is ${covertedSpeed} ms^-1`);
    }else{
        console.log('wrong input');
    }
}
getSpeedInMeterPerSecond(`1000 kmh^-1`)
getSpeedInMeterPerSecond(null)

const throwError = (msg:string):never => {
    throw new Error(msg)
}
throwError('error ho ga ya')
}