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
const coppiedArray2 = [...hobbies]; //Spread operator takes an array or object and takes out all 
                                    //the propertties/elemnts and added to new array or object

console.log(copiedArray);
console.log(coppiedArray1);
console.log(coppiedArray2);

//Applying spread operator on an object
const copiedPerson = {...person};

console.log(copiedPerson);
copiedPerson.greet();

//Rest operator example (merges arguments)

const toArray = (arg1, arg2, arg3) =>{
    return [arg1, arg2, arg3]; //one way to do it but not flexible 
                               //and not work with variable number of arguments
}

console.log(toArray('Max', 29, true));

const toArrayRest = (...args) =>{
    return args;
}

console.log(toArrayRest(1,2,3,4));
console.log(toArrayRest(1,2,3,4,5,6));