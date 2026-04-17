
//! En vez de desetructurar con {} llaves podemos hacerlo con [] corchetes, esto se llama array destructuring

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ character1, character2, character3 ] = characterNames;

console.log({ character1, character2, character3 });

//! También podemos omitir algunos valores

const [ , , againC3 ] = characterNames;
console.log({ againC3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnsArrayFn();

console.log(letters + 100);
console.log(numbers + 100);
