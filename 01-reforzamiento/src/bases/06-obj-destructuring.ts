
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    country: undefined
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { name:ironmanName, age, key } = person;

console.log({ ironmanName, age, key});

// ! El orden de la destructuración con objetos no importa, lo importante es el nombre de la propiedad a destructurar
// ! Con los objetos se pueden asignar nuevos nombres a las variables, con la sintaxis: { propiedad: nuevoNombre }
const { name: nombre, age: edad, key: clave } = person;

console.log({ nombre, edad, clave });

// ! También se pueden asignar valores por defecto a las propiedades que no existen en el objeto, con la sintaxis: { propiedad = valorPorDefecto }
const { name: nombre2, age: edad2, key: clave2, country = 'USA' } = person;

console.log({ nombre2, edad2, clave2, country });

// ! También se pueden asignar nuevos nombres a las variables y valores por defecto al mismo tiempo
const { name: nombre3, age: edad3, key: clave3, country: pais = 'USA' } = person;

console.log({ nombre3, edad3, clave3, pais });

// ! También se pueden destructurar objetos anidados
const person2 = {
    name: 'Bruce',
    age: 50,
    key: 'Batman',
    coordinates: {
        lat: 14.1232,
        lng: 12.3232
    }
};

const { name: nombre4, age: edad4, key: clave4, coordinates: { lat, lng } } = person2;

console.log({ nombre4, edad4, clave4, lat, lng });

// --------------------------------------------------------

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ key, name, age, rank = 'sin rango' }: Hero ) => {
    return {
        keyName: key,
        user: {
            name: name, // ! Si el nombre de la propiedad y el nombre de la variable son iguales, se puede omitir el valor, quedando solo el nombre de la propiedad como se ve abajo
            age,
        },
        rank: rank
    };
};

const context = useContext(person);

console.log(context);

//* Tarea: Sacar el rango, el keyname y el nombre del useContext

const { rank,
    keyName,
    user,
    // user: { name }
} = useContext(person);
const { name } = user;

console.log( { rank, keyName, name } );
