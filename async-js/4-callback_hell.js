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

    // async
    setTimeout( () => {
        callback(productName)
    }, 2500)
}

function fry(foodName, callback){
    console.log("Started Frying " + foodName)
    
    // async
    setTimeout( () => {
        console.log(foodName + " is ready")
        callback(foodName)
    }, 2500)

    console.log("Still Frying " + foodName + ".....")
}

function bake(foodName){
    console.log("Started Baking " + foodName)

    // async
    setTimeout( () => {
        console.log(foodName + " is ready")
    }, 2500)

    console.log("Still Baking " + foodName + ".....")
}

function decorate(productName, callback){
    console.log(productName + " decorated")
    callback(productName)
}

function delivered(productName){
    console.log(productName + " delivered")
}

console.log("Customer 1 entered")
order("french-fry", (productName) => {
    fry(productName, (productName) => {
        decorate(productName, (productName) => {
            delivered(productName)
        } )
    })
})
// console.log("Customer 2 entered")
// order("pasta", bake)