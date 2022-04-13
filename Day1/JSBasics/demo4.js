//Demo - Object, properties and methods

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

person.greet();