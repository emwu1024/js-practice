let stringVer = '200';
let numVer = 200;

console.log(stringVer==numVer);
console.log(stringVer===numVer);

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null === 0);
console.log(undefined == 0);
console.log(undefined === 0);
console.log(null == NaN);
console.log(NaN == undefined);

const name = 'Mizu'
const dept = 'Swordsmith'

console.log(`Hello my name is ${name} and I work as a ${dept}`);

// Singleton Object Declaration
const singletonObj = new Object();


// Non Singleton ''
const nonSingletonObj = {};

singletonObj.name = 'Ringo';
singletonObj.email = 'ringo@gmail.com';
singletonObj.profession = 'Noodle Master';

// Object Literal Declaration
const userSym = Symbol('user1');

const user = {
    fullName : {
        fName: 'Taigen',
        lName: 'Itoh'
    },
    userName: 'T',
    email: 't@gmail.com',
    profession: '??',
    [userSym]: 'Declared Symbol'
}


// Example of freezing the object so changes can no longer occur to the object
console.log(user);

user.email = 'taigen@gmail.com';
console.log(user);

// Object.freeze(user);

// user.email = 'wrong-email@gmail.com';
// console.log(user);


// Adding functions to the object
// Ensure object is unfrozen from prev. exercise
user.getGreeting = function(name) {
    console.log('Hello ' + name + ` from ${this.fullName.fName} ${this.fullName.lName}`);
}

user.getGreeting('Mizu');
console.log(user);