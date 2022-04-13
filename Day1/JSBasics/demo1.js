//Demo - Core syntax

var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return "Name is : " + userName + ", with age " + userAge + ", and the user has hobbies " + userHasHobbies;
}

console.log('Calling summarizeUser method before age change ' + summarizeUser(name, age, hasHobbies));