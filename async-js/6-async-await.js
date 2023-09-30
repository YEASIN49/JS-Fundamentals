// Recall the process
// (1) user enter 
// (2) order process
// (3) start frying/baking 
// (4) still frying/baking
// (5) is ready
// (6) Decorated
// (7) Delivered

async function order(productName, callback){
    console.log("processing " + productName + " order details")
    
    return (
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productName)
            }, 2500)
        })
    )
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
    // return productName
    return (
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productName)
            }, 2500)

        } )
    )
}

async function delivered(productName){
    console.log(productName + " delivered")
    return "All processing of " + productName + " is completed"
}

async function maintainFry(foodName){
    const orderRes = await order( foodName ) 
    const fryRes = await fry(orderRes)
    const decorateRes = await decorate(fryRes)
    const deliveredRes = await delivered(decorateRes)
    console.log( deliveredRes )
}

console.log("Customer 1 entered")
maintainFry("friench-fry")
// order("french-fry")
//     .then( fry )
//     .then(decorate)
//     .then(delivered)
//     .catch((err) => {
//         console.error( err )
//     })


console.log("Customer 2 entered")
// order("pasta")
//     .then( bake )
//         .then(decorate)
//             .then(delivered)
//     .catch((err) => {
//         console.error( err )
//     })