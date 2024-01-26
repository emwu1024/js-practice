// Arrow Functions Examples


// A normal function
const regularFunc = function() {
    console.log('This was from a regular function!');
}

regularFunc();

// An arrow function
const arrowFunc = ()=>{
    console.log('And this was from an arrow function!!');
}

arrowFunc();


// Another example
const sumNums = (num1, num2) => (num1+num2)

console.log(sumNums(6, 14));


// IIFE - Immediately Invoked Function Expression
// be careful with semicolons?
(()=> {console.log('?? apparently this is an IIFE, whatever that is??')})();