// Recall the process
// (1) user enter 
// (2) order process
// (3) start frying/baking 
// (4) still frying/baking
// (5) is ready
// (6) Decorated
// (7) Delivered

function order(productName, callback){
    console.log("processing " + productName + " order details")
    return (
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productName)
            }, 2500)

        } )
    )


    // async
}

function fry(foodName, callback){
    console.log("Started Frying " + foodName)

    console.log("Still Frying " + foodName + ".....")
    return (
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                console.log(foodName + " is ready")
                resolve(foodName)
            }, 2500)

        } )
    )
    
}

function bake(foodName){
    console.log("Started Baking " + foodName)

    console.log("Still Baking " + foodName + ".....")
    return (
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                console.log(foodName + " is ready")
                resolve(foodName)
            }, 2500)

        } )
    )
}

function decorate(productName, callback){
    console.log(productName + " decorated")
    // callback(productName)
    return productName
}

function delivered(productName){
    console.log(productName + " delivered")
}

console.log("Customer 1 entered")
order("french-fry")
    .then( fry )
    .then(decorate)
    .then(delivered)
    .catch((err) => {
        console.error( err )
    })


console.log("Customer 2 entered")
order("pasta")
    .then( bake )
        .then(decorate)
            .then(delivered)
    .catch((err) => {
        console.error( err )
    })