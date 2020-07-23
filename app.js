//object oriented programming 
//classes and objets 

//how to write a basic class and use that class
//classes new term before we write relate to what weve done 

//object is something with key value pair in t
//make object and in key value pairs those are characterstics of our objects

// prototypical inheriticance

const dog = {
    name: 'Michael',
    //is the dog good?
    goodBoy: true,
    //gender?
    gender: 'girl'
}
const dogTwo = {
    //give this dog some characteristics 
    //relate dog to dogTwo
    //term key __proto
    //__proto means this dog has some properties on it 
    //this particular object all these properties can be used in the proto
    // use the function constructors check the value 
    //what if i want all the charactistcs from dog to dogTwo
    name: 'Rocco',
    //is brown a property? no 
    color: 'brown'
    
}
//connect other objects to other objectTwo
dogTwo.__proto__ = dog

console.log(dog)
console.log(dogTwo)

console.log(dogTwo.goodBoy)
//give back michael when const dogTwo = {} blank
//no key value pair
//__proto__ inerhited that object of dog
console.log(dogTwo.name)

//make Two objects one object needs to inherit from the other object

const mumbleRapper = {
    name: 'Lil yachti',
    goodRapper: false,
    trashMaterial: true,
    gender: 'male'
}

console.log(mumbleRapper)

const mumbleRapperTwo = {
    name: 'Lil Pump',
    
    trashMaterial: true,
 
}
mumbleRapperTwo.__proto__ = mumbleRapper
console.log(mumbleRapperTwo.goodRapper)

mumbleRapperTwo.name = 'tekeshi69'

console.log(mumbleRapperTwo.name)
console.log(mumbleRapper.name)