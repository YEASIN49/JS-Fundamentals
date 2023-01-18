const myObj = {
    propOne: 'I am number one',
    propTwo: 19.5,
    propThree: true,
    4: 'My key/name/property is written using number',
    propFive: [ 2, 4, 6 ],
    propSix: {
        childPropOne: 10,
        childPropTwo: 'Child object Property'
    }
}
// Access property value using dot notation
console.log( myObj.propOne ) // this will print 'I am number one'
console.log( myObj.propFive ) // this will print '[ 2, 4, 6 ]'
console.log( myObj.propSix.childPropTwo ) // this will print 'Child object property' 
// console.log( myObj.4 ) // This will produce ERROR 

//Access using bracket notation
console.log( myObj[ 4 ] ) // this will print 'My key/name/property is written using number'

const dynamicAccess = 'propOne'

console.log( myObj.propOne ) // will print 'I am number one'
console.log( myObj[ dynamicAccess ] ) // will print 'I am number one'