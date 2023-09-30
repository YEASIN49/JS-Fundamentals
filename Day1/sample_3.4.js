/*********************************************************************************************** 
    slice: return a new array(shallow copy) between a range without modifying the original array
    syntax: slice( start, end )
***********************************************************************************************/
// var myArr = ["a", "b", "c", "d"]
// const slicedData = myArr.slice(1, 3) // slicing data from index 1 untill index 3 and return a copy
// console.log( slicedData )  // will print: [ 'b', 'c' ]

// const sliceAll = myArr.slice() // will slice all data and ** RETURN A COPY **
// console.log( sliceAll ) // will print: [ 'a', 'b', 'c', 'd' ]
// console.log({ value: myArr })


/****************************************************************************
 splice: modify the original array by removing/adding existing array elements
 syntax: splice(start, deleteCount, item1, item2, itemN)
*****************************************************************************/
var myArr = ["a", "b", "c", "d"]
const splicedData = myArr.splice(2, 2, 'P', 'Q', 'R') // modify original array by removing 2 elements starting from index 1 and return the removed data.
console.log( splicedData )  // will print: [ 'b', 'c' ]
console.log( myArr )  // will print: [ 'a', 'd' ]

