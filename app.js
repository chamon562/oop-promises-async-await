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

// constructer function
//what is a function 
//function is some type of action
//fucntion did something and return some type of value
//will be like function template with info in it and we gon put info it
//constructor function user has to be capitlize
//set whatever you want to pass in ins
//shows three dots
function User(name){
    //an object in particuler use this in side the object and reffering to object
    //this is refering to user
    this.name = name
    //setting this to this user
    //return this and this is the user 
    //constructor function will automatically return this
    //so you dont have to return this
    // but regular need some type of return value
}

//whenever use this constrcutor function  this is like our template
// set variable use the tempelate and set in ADAM
// key word New initate constructer function new
let adam = new User('Adam')
//now can console.log adam
//any time we have a functio we need to return someting
//this wil return something but ac
let pete = new User('Pete')
console.log(adam.name)
console.log(pete.name)

function NBAPlayer(name, team, threePointShooter){
    //under the hood this = () this is equaling the object
    this.name = name
    this.team = team
    this.threePointShooter = threePointShooter
    //going to return all this for you automatically
}

let steph = new NBAPlayer('steph curry', 'warriors', true)
console.log(steph)
console.log(steph.name)

function BESTRapper(name, label, goodRapper ){
    this.name = name
    this.label = label
    this.goodRapper = goodRapper
    this.intro = function(){
        console.log('Greatest Rapper Ever is ' + this.name)
    }
}

let tupacShakur = new BESTRapper('Tupac Amaru Shakur', 'Death Row', true)
let nipsey = new BESTRapper('Nipsey Hussle', 'All Money In', true)
console.log(tupacShakur)
console.log(tupacShakur.name)
console.log(nipsey)

function DOTA2Hero(name, role, type){
    this.name = name
    this.role = role
    this.type = type
    this.intro = function(){
        console.log('Hi, my name is ' + this.name)
    }
}
//console location are key words so can mess up if you put int he perameters 
let axe = new DOTA2Hero('Axe', 'Tank', 'Strength')
let invoker = new DOTA2Hero('Invoker', 'Disabler', 'Intellect')
console.log(axe)
console.log(invoker)
//what do you do wit a function call it or invoke with parenthsis
//not put in consolelog because when i run this functio it will do a console.log
axe.intro()
invoker.intro()
nipsey.intro()
tupacShakur.intro()
//up here intro is our function were using
//constructor functions is a template 

class Car {
    //here is where setup your constructor what you pass in to your class
    //like a function
    //constrcutor part info we put in
    constructor(year, make, model, color){
        this.year = year
        this.make = make
        this.model = model
        this.color = color
        //if we want to make methods
    }
    //drive is seperate function outside of that
    //make method drive invoke
    drive(){
        console.log('Vroom')
    }
    intro(){
        console.log('This car is a ' + this.make + ' ' + this.model)
    }

}

let tesla = new Car('2020', 'Tesla', 'Model S', 'red')
console.log(tesla)
tesla.drive()
tesla.intro()

//here make a fetch call and grab our actual github profile 
//https://api.github.com/users/romebell
//makking fetch call and paass in url as string
//grabs my github
class GithubProfile {
    constructor(username, name, url){
        this.username = username
        this.name = name
        this.url = url
    }
    intro(){
        //back ticks `` is usefull this can include java script code
        console.log(`My name is ${this.name} and my user name is @${this.username}`)
}

}

fetch('https://api.github.com/users/chamon562')
.then(response =>{
    return response.json()
})
.then(data =>{
    // console.log(data)
    let githubURL = data.url
    // console.log(githubURL)
    let githubUserName = data.login
    // console.log(githubUserName)
    let githubName = data.name
    // console.log(githubName)
    //set class
    let channee = new GithubProfile(githubUserName, githubName, githubURL)
    console.log(channee)

    channee.intro()

})

//take items and make my own class
//grab login name and url


//now info and make new class

fetch('https://api.github.com/users/Lizzwest')
.then(response =>{
    return response.json()
})

.then(data =>{
    console.log(data)
    const lizz = new GithubProfile(data.login, data.login, data.url)
    console.log(lizz)
    lizz.intro()
})