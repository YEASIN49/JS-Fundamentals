const sampleString = 'My student id is: Bolbona'
const newString = sampleString.replace('Bolbona', '12345678')

if( newString.includes( '0' ) ){
    console.log( 'ID contains zero' )
}
else{
    console.log( 'zero not found' )
}