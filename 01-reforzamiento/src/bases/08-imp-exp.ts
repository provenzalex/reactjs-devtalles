import { heroes as myHeroes, type Hero, Owner } from "./data/heroes.data"


const getHeroById = ( id: number ): Hero | undefined => {

    const hero = myHeroes.find( (hero) => {
        return hero.id === id;
    });

    // if ( !hero ) {
    //     throw new Error(`No existe un héroe con el id ${id}`);
        
    // }

    return hero;
}

// console.log(getHeroById(3));


/*  // TAREA //
    getHeroesByOwner => Hero[]
    Filtra héroes por su propietario
    @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeración Owner
    @returns Array de héroes pertenecientes al propietario
*/

export const getHeroesByOwner = ( owner: Owner ): Hero[] => {

    const heroes = myHeroes.filter(( hero ) => {
        return hero.owner === owner;
    });

    return heroes;
}