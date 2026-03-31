
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address; //* El signo de interrogación indica que esta propiedad es opcional
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony', // *
    lastName: 'Stark', // *
    age: 45, // *
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
};

// console.log( { ironman} );


const spiderman = { ...ironman }; /* Spread a primer nivel * Sin embargo, no es una copia profunda,
                                 sino una copia superficial'. Sin esto cuando se cambia un valor
                                 en spiderman, también se cambia en ironman en toda la estructura */ 

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address!.city = 'Guatemala';  //* Cambia el valor de ironman también porque en JavaScript
                                        //* los objetos funcionan con direcciones. (Referencia a la misma dirección de memoria)
console.log( ironman, spiderman );

//* Para tener una copia bien estructurada utilizamos:
const realSpiderman = structuredClone( ironman );
realSpiderman.firstName = 'Peter';
realSpiderman.lastName = 'Parker';
realSpiderman.age = 22;
realSpiderman.address!.city = 'Guatemala cloned'; //* structuredClone hace una copia profunda, es decir, crea una nueva estructura de datos
console.log( ironman, realSpiderman );

//! El signo de exclamación después de address indica a TypeScript que estamos seguros de que address no es undefined en ese momento. Es una forma de decirle al compilador: "Confía en mí, sé lo que estoy haciendo". Sin embargo, es importante usarlo con precaución, ya que si address realmente es undefined en tiempo de ejecución, se producirá un error.