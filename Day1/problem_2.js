function checkNumber( num ){

    if(num === 0){
        console.log( 'Zero' )
    }
    else if( num % 2 === 0 ){
        console.log(num % 2)
        console.log( 'Even' )
    }
    else if( num % 2 === 1 || num % 2 === -1 ){
        console.log('Odd')
    }
    else{
        console.log('Fraction')
    }
}

checkNumber( 5 )