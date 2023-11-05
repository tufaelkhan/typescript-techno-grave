{
// promise

// simulate
const createPromise = (): Promise<{something: string}> =>{
    return new Promise<{something: string}>((resolve, reject) => {
        const data: {something: string} = {something:'something'}
        if(data){
            resolve(data)
        }else{
            reject('failed to fetch')
        }
    })
}

// calling create promise function
const showData = async (): Promise<{something: string}> => {
    const data:{something: string} = await createPromise();
    return data
}
showData()

}