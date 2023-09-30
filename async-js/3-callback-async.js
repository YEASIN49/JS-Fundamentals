function order(productName, callback){
    console.log("processing " + productName + " order details")

    // async
    setTimeout( () => {
        callback(productName)
    }, 2500)
}

function fry(foodName){
    console.log("Started Frying " + foodName)
    
    // async
    setTimeout( () => {
        console.log(foodName + " is ready")
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

console.log("Customer 1 entered")
order("french-fry", fry )
console.log("Customer 2 entered")
order("pasta", bake)