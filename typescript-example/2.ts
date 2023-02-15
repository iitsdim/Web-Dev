let a: number;
a = 2;

// a = 'hello'; error

interface User {
    name: string;
    age: number;
}

let user1: User = {
    name: 'User 1',
    age: 20
};

console.log(user1.name);

// console.log(user1.address); error

function sum(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(sum(2, 3));

function greeting(user: User) {
    console.log(`Hi ${user.name}`)
}

greeting({
    'name': 'Dimash',
    age: 0
})
