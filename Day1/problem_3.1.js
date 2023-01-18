
function largestFinder( arr ){
    let largest = arr[0]
    arr.forEach(( element ) => {
        if (element > largest) {
            largest = element
        }
    })
    console.log( largest )
}

const array = [3 , 6, -2, -56, 32, 5, -89, 32]
largestFinder( array )