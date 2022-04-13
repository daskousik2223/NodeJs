//Demo - Arrow function

let name = 'Max';
let age = 29;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) =>{
    return "Name is : " + userName + ", with age " + userAge + ", and the user has hobbies " + userHasHobbies;
}

//If the function has only one statement then another short form exists
const add = (a, b) => a + b;

//Another short form if there is only one argument
const addOne = (a) => a+1;

//Another short form if there is no argument
const addRandom = () => 1 + 19;

console.log('Calling summarizeUser method before age change ' + summarizeUser(name, age, hasHobbies));

age = 30;

console.log('Calling summarizeUser method after age change ' + summarizeUser(name, age, hasHobbies));

console.log('Calling add method ' + add(2,3));

console.log('Calling addOne method ' + addOne(10));

console.log('Calling addRandom method ' + addRandom());