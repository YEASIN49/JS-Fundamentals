// for loop: loops through block of codes for a number of times defined by user.
for( let i = 0; i <= 5; ++i ){
    console.log( i )
}

// for...in loop: loops through the properties/key of an object
const forInLoop = { 
    a: 5,
    b: 10,
    c: 15
}
for (const property in forInLoop) {
    console.log( property );
}

// for...of loop: loops through the value of an iterable object.
const forOfLoop = [ 'CSE110', 'CSE111', 'CSE220' ]
for( const element of forOfLoop ){
    console.log( element )
}