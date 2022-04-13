//Demo - let and const type

let name = 'Max';
//const age = 29; if const the vaue of the ariable can not be changed. any attempt will generate runtime error
let age = 29;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return "Name is : " + userName + ", with age " + userAge + ", and the user has hobbies " + userHasHobbies;
}

console.log('Calling summarizeUser method before age change ' + summarizeUser(name, age, hasHobbies));

age = 30;

console.log('Calling summarizeUser method after age change ' + summarizeUser(name, age, hasHobbies));