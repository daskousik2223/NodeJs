//Demo - arrays

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

for(let hobby of hobbies){
    console.log(hobby);
}

for(let item of arrayMixedTypes){
    console.log(item);
}

//Some sample methods that can be used with the array
console.log('Demo of some array functions');
console.log('********************************');
console.log(hobbies.map(hobby => 'Hobby ' + hobby)); //important that the function name is same 
                                                     //as the element name to be used in the function
console.log(hobbies);

