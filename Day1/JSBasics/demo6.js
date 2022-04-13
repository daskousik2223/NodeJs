//Demo - Arrays, Objects and References

const person = {
    name: 'Max',
    age: 29,
    hasHabbits:true,
//    greet: () => { - This will resut in this.name = undefined
//        console.log('Hi I\'m ' + this.name);
//    }
      greet(){
        console.log('Hi I\'m ' + this.name);
    }
};


//Arrays can have elements f same type, mixed type. It can even contain object and other arrays
const hobbies = ['Sports', 'Movies', 'Music'];
const arrayMixedTypes = ['String', 2000, true];

console.log(hobbies);

hobbies.push('Reading'); //Updating the const hobbies as it is a reference

console.log(hobbies);