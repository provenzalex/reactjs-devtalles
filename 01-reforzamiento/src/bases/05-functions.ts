

function greet( name: string):string {
    return `Hello, ${name}!`;
}

const greet2 = (name: string): string => {
        return `Hello, ${name}!`;
    }

const message = greet('Alice');
const message2 = greet2('Alice2');

console.log(message); // Output: Hello, Alice!
console.log(message2); // Output: Hello, Alice2!

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: '123',
        username: 'john_doe',
    };
}

const getUser2 = (): User => ({
    uid: '123',
    username: 'john_doe',
});

const user = getUser();
const user2 = getUser2();
console.log(user); 
console.log(user2); 




const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach( function(value) {
//     console.log({ value });
// });

// myNumbers.forEach( (value) => {
//     console.log({ value });
// });

myNumbers.forEach(console.log);