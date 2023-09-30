// const hero1 = 'darkman' 
// const hero2 = 'demon-slayer'
// const newHeroStart = hero1.slice( 4 ) 
// const newHeroEnd = hero2.split('-')
// const myHero = newHeroStart.concat( newHeroEnd[1] ) 
// console.log( myHero )

const test = [ 'Sakib', 'tamim', 'fiz', 'mash' ]

// for( let i = 0; i < test.length; i++ ){
//     console.log( test[ i ] )
// }

const result = test.filter(( elem, index ) => { 
    if( elem === 'Sakib' ){
        return elem
    }
})
console.log( result )