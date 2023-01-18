const arrowAdd = ( num1, num2 ) => {
    const sum = num1 + num2
    return sum
}

function tradAdd( num1, num2 ){
    const sum = num1 + num2
    return sum
}

const arrowRes = arrowAdd( 5, 2 )
const tradRes = tradAdd( 5, 2 )

console.log( 'arrow: ' +  arrowRes )
console.log( 'trad: ' +  tradRes )