//Demo - Destructuring

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

//Trying to access one element from the object and the below code is fine

const printName = (personData) =>{
    console.log(personData.name);
}

printName(person);

//Same thing can be done with object destructuring

const printNameDestruct = ({name, greet}) =>{
    console.log(name);
    greet();
}

printNameDestruct(person);

//Destructuring can be used outside of the method too

const {name, age} = person;

console.log(name + "/" + age);

//Destructuring arrays

const hobbies = ['Sports','Movies','Music'];

//const [hobby1, hobby2] = hobbies;
const [hobby1,, hobby2] = hobbies; //Example of destructuring happens for array by positions

console.log(hobby1 + '/' +hobby2);