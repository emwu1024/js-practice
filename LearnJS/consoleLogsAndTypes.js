console.log('test');
let bestFruits = ["peach", "mango", "lychee", "strawberry", "grape"]
let wonderWhatThisDoes = '190'

console.table(bestFruits);

console.log(typeof wonderWhatThisDoes);
console.log(typeof Number(wonderWhatThisDoes));
console.log(typeof bestFruits);
console.log(typeof bestFruits[1]);

let mixedString = 'Th15 15 4 t35t 5tr1ng';

console.log(typeof mixedString);

let numVer = Number(mixedString);
console.log(typeof numVer);
console.log(numVer);


// Primitive VS. Non Primitive

// Number is type primitive
let num1 = 2234;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 5;

// num1 changed BUT num2 didn't 
console.log(num1);
console.log(num2);

// Object is type non primitive
let userOne = {
    email: 'mizu@gmail.com',
    name: 'Mizu',
    Profession: 'Swordsmith'
}

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userOne.email = 'Mizu2@gmail.com';

// userOne.email changed and so did userTwo.email
console.log(userOne.email);
console.log(userTwo.email);

