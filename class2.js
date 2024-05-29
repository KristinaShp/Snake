class Animal {
  name;
  constructor (an){
    this.name = an;
  }  
  run (speed){
    console.log (`${this.name}, run with speed ${speed}`)
  }
}

class Dog extends Animal{
    voice(){
        console.log (`${this.name}, says GavGAv`)
    } 
}

class Cat extends Animal {
    voice(){
        console.log (`${this.name}, says MewMew`)
    } 

} 
class User {};

class Zoo {
    animals = [];
add (animal){
    if (animal instanceof Animal){
        this.animals.push (animal)
    } else {
        alert ("Not animal!");
    }

} 
}
const a1 = new Animal ("Dodo");
a1.run (2000);

const a2 = new Dog ("Hoho");
a2.run (30);
a2.voice ();

const a3 = new Cat ("Kika");
a3.run (50);
a3.voice ();

const a4 = new User (" ");

const zoo = new Zoo ();
zoo.add (a1);
zoo.add (a2);
zoo.add (a3);
zoo.add (a4);

console.log (zoo.animals);


