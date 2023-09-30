const objValue = {
    one:{ val: 5 },
    two: { val: 6 },
    three: { val: 7 },
    four: { val: 8 },
}

// access object
// dot
// bracket []
// Object.entries

// const arr = [ 5, 15, 30, 50, 100 ]

// for( const myProp of arr ){
//     console.log(myProp)
// }

// for(const myProp in objValue){
    // console.log(objValue[ "two" ])
    
    // if( objValue[ myProp ].val === "5" ){
    //     console.log("This is five")
    // }
    // else if( objValue[ myProp ].val == 6 ){
    //     console.log("This is six")
    // }
// }

const myObj = {
    v1: "value 1",
    v2: "value 2",
    v3: "value 3"
}

//  Object Methods
// keys
// values
// entries
// syntax: Object.method_name( your_object )

// console.log( Object.keys( myObj ) )
// console.log( Object.values( myObj ) )
// console.log( Object.entries( myObj ) )



// for( const [key, value] of Object.entries( myObj ) ){
//     console.log(key + " - " + value)
// }

// copy and return
// modify and reuturn

// const str = "This is something"

// // console.log( str.includes(" something") )
// // const result =  str.replace("Something", "replaced") 
// const result = str.split(" ") // from 1 before 3 // .trim
// const strRes = result.join()


// console.log( result )
// console.log( strRes )

// map
// forEach
// filter

// i = 0

// arr[ i ] += 5

const arr = [ 5, 10, 20, 60, 90 ]

const result = arr.filter(    ( item ) => { 
    item += 5  
    if( item  > 15 ){
        return item

    }
    // console.log(index)

})

console.log( result )
console.log( arr )
