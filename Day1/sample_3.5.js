/**************************
* length
* syntax: Array.length
***************************/
var myArr = ["a", "b", "c", "d"]
console.log( myArr.length ) // will print: 4
myArr.length = 2 // original array gets modified
console.log( myArr ) // will print: [ 'a', 'b' ]

/******************************
* concat
* stntax: Array.concat( trailing Array )
**********************/
const course = [ 'C', 'S', 'E' ]
const code = [ '4', '4', '6' ]
const final = course.concat( code ) // will be: [ 'C', 'S', 'E', '4', '4', '6' ]
console.log( final )

/*********************************************************************************************************************
* join: bind the elements of array by adding the parameter value in between the elements and convert it into a string. 
* syntax: Array.join( string ) 
**********************************************************************************************************************/
const finalStr = final.join('') // will be CSE446

/*********************************************************************************************************************
* includes: iterate and check the target string exist or not. Return result as Boolean 
* syntax: Array.includes( string ) 
**********************************************************************************************************************/
const checkLowerCase = finalStr.includes( 'cse' ) // will return false 
const checkUpperCase = finalStr.includes( 'CSE' ) // will return true 