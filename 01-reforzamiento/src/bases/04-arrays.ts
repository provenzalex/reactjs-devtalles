

const myNumberArray:number[] = [1, 2, 3, 4, 5, 6]; // Array that TS infers as number[]
const myStringNumberArray:(string | number)[] = ['1', 2, 3, 4, 5, 6]; // Array that TS infers as (string | number)[]

myNumberArray.push(7); // OK
// myNumberArray.push('8'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// for ( const myNumber of myStringNumberArray ) {
//     console.log(myNumber + 10); // OK, but if myNumber is a string, it will concatenate instead of adding
// }

const myNumberArray2 = myNumberArray;

myNumberArray2.push(8); // OK, but it also modifies myNumberArray because they reference the same array in memory

console.log( myNumberArray, myNumberArray2 );

const myNumberArraySpread = [...myNumberArray]; // Creates a new array with the same elements as myNumberArray

myNumberArraySpread.push(9); // OK, and it does not modify myNumberArray

console.log( myNumberArray, myNumberArraySpread );

//! Spread operator creates a new array, while direct assignment creates a reference to the same array in memory. But be careful, if the array contains objects, the spread operator will only create a shallow copy, meaning that the objects themselves are still referenced.
//* Use structuredClone for deep copying arrays that contain objects, as it creates a new array and also clones the objects within it.