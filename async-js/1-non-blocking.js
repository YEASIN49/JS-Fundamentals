const runTest = 9000

const blocking = () => {
    for(let i = 0; i < runTest; i++  ){
        console.log(i)
    }
}

const nonBlocking = () => {
    console.log("Called Non-blocking")
    setTimeout( () => console.log('Processed From timeout') , 2000 )
}

blocking()
nonBlocking()
console.log("Outside loop")
