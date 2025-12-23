// Corrected function
function add(a, b) {
    return a + b;
}
console.log("Add of 2 + 3 :", add(2, 3)); // Output: 5

// Another example
function multiply(x, y) {
    return x * y;
}
console.log("Multiply of 4 * 5 :", multiply(4, 5)); // Output: 20


const square = (n) => n * n;
console.log("Square of 6 :", square(6)); // Output: 36

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Mico")); // Output: Hello, Mico!

const number = [2, 4, 6, 8];

const [first , , , fourth] = number;
console.log("First number:", first);
console.log("Fourth number:", fourth);

const [a,b] = number

console.log("a:", a);

const [start, ...rest] = number;

console.log("start:", start);
console.log("rest:", rest);

const person = {
    name: "Mico",
    age: 30,
    city: "New York",
    email: "mico@example.com",
    branch: "CE"
}

// const {name, age} = person;

// console.log("Name:", name);
// console.log("Age:", age);

// const {city, semester = "5th"} = person;

// console.log("City:", city);
// console.log("Semester:", semester);


// const {name, ...details} = person;
// console.log("Name:", name);
// console.log("Details:", details);

const arr1 = [1, 2, 3,4];
const arr2 = [5, 6, 7,8];
const combinedArr = [...arr1, ...arr2];
console.log("Combined Array:", combinedArr);

const arr4 = [4, 5, 6,7 ];
const newArr = [1, 2, 3, ...arr4, 8, 9];
console.log("New Array:", newArr);

const arr5 = [...arr1 , 77,88,99 , ...arr2];
console.log("arr5:", arr5);

const o1 = {a: 1, b: "two"};

const o2 = {c: 3, d: "four"};

const combinedObj = {...o1, ...o2, e: 5};
console.log("Combined Object:", combinedObj);


