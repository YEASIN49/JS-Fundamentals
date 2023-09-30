function order(productName, callback){
    console.log("processing " + productName + " order details")

    let timeElapsed = 0
   
    while( timeElapsed < 100 ){
        console.log( "Still processing order for " + productName + "...." )
        ++timeElapsed
    }

    callback(productName)
}

function fry(foodName){
    console.log("Started Frying " + foodName)

    let timeElapsed = 0
    while( timeElapsed < 100 ){
        console.log( "Still Frying " + foodName + "...." )
        ++timeElapsed
    }

    console.log(foodName + " is prepared")
}

function bake(foodName){
    console.log("Started Baking " + foodName)

    let timeElapsed = 0
    while( timeElapsed < 100 ){
        console.log( "Still baking " + foodName + "...." )
        ++timeElapsed
    }

    console.log(foodName + " is prepared")
}


// What will happen if async
// function order(productName, callback){
//     console.log("processing " + productName + " order details")

//     setTimeout( () => {
//         callback(productName)
//     }, 2500)

// }

// function fry(foodName){
//     console.log("Frying " + foodName)
//     setTimeout( () => {
//         console.log(foodName + " is ready")
//     }, 2500)

// }
// function bake(foodName){
//     console.log("Frying " + foodName)
//     setTimeout( () => {
//         console.log(foodName + " is ready")
//     }, 2500)
// }


console.log("Customer 1 entered")
order("french-fry", fry )
console.log("Customer 2 entered")
order("pasta", bake)