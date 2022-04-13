//Demo - Spread and Rest operators

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

//Copying an array

const copiedArray = hobbies.slice(); //copy the array into a new array
const coppiedArray1 = [hobbies]; //creates an array of array
const coppiedArray2 = [...hobbies]; //creates an array of array
console.log(copiedArray);
console.log(coppiedArray1);
console.log(coppiedArray2);