const hero1 = 'darkman'
const hero2 = 'demon-slayer'
const newHeroStart = hero1.slice( 4 )
const newHeroEnd = hero2.split('-')
const myHero = newHeroStart.concat( newHeroEnd[1] ) 
console.log( myHero )