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
    [userSym]: 'Declared Symbol',
    welcomeMessage: function() {
        console.log(`Welcome ${this.userName}!`);
    }
}

user.welcomeMessage();


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


const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};

const obj3 = {obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2)
// Spread operator
const obj5 = {...obj1, ...obj2}

console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log('Keys of obj5: ' + Object.keys(obj5));
console.log('Keys of user object: ' + Object.keys(user));



// Experimenting with line order - because this is a compiled language (Just In Time compiler) all of the code is read and checked prior to running
// Unlike interpretted languages such as Java

const result = sumNums(5, 10);
console.log(result);

function sumNums(num1, num2) {
    let result = num1+num2;
    return result
}


// If the number of parameters is not predetermined, use the spread operator

function addAllNums(...nums) {
    let total = 0;
    for (let i=0; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;
}

console.log(addAllNums(1, 2, 3, 4, 5, 234, 341));

// Example for scopes 

console.log(this);

function testFunc(){
    console.log(this);
}

testFunc();


// Nullish operator = ?? - this operator will take the first positive value if it is null or undefined

let val1;
let val2

val1 = null ?? 10
val2 = undefined ?? 10

console.log(val1);
console.log(val2);