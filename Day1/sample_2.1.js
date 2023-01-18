let sampleStr = 'Hello Javascript'

// access character using bracket notation
sampleStr[ 0 ] //  will return "H"
sampleStr[ 1 ] //  will return "e"
sampleStr.length // will return 16

// concat: add string and return a new copy of string. Do not modify original string
// syntax: String.concate( trailingString1, trailingString2 ..... )
sampleStr.concat(' Lovers') // will return new string "Hello Javascript Lovers" 

// includes: check the target string and return result in boolean
// syntax: includes( targetString )
sampleStr.includes('He') // will return true | This is case sensitive

// replace: will check the first argument and replace it with second one as new string object 
// replace method don't modify the original string 
// syntax: replace(targetString, stringToBeAdded)
sampleStr.replace('Javascript', 'World') // this will return a new stirng "Hello World"

// slice: extract part of the string from indexStart untill indexEnd and retuen a new one
// syntax: slice(indexStart, indexEnd)
sampleStr.slice( 1, 3 ) // will return "el"

// split: split the string matched with the passed argument and return a converted array from it 
// syntax: split( seperatorString )
sampleStr.split(' ') // will return [ 'Hello', 'Javascript' ]
