/*
    Destructuring
    -Object
    -Array
    -Parameters
    
*/
// Destructuring hoa kanfakak objet o kanjib mano juste les proprite li bghit


// OLD WAY
var user = {
    name: "mehdi",
    gender: "male",
    age: 31,
    origin: "morocco",
}

var u = user.name,
    g = user.gender,
    a = user.age;


console.log(`my name ise ${u} ana my gender ise ${g}`)



// NEW WAY
const person = {
      color: "black",
      hand: "two hand",
      age: 31,
      origin: "morocco",
      theme : "green_themes"
}

const { color, hand , theme ='red_themes'} = person;

console.log(`My color is ${color} and i have ${hand} and prefer themes is ${theme}`)


console.log("==========================#13 - Destructuring Object Part 2======================================")


// NEW WAY
const person_2 = {
      color: "black",
      hand: "two hand",
      age: 31,
      origin: "morocco",
      theme : "green_themes"
}

const { color:alias_of_color, hand:alias_of_hand} = person_2;

console.log(`My color is ${alias_of_color} and i have ${alias_of_hand} and prefer themes is ${theme}`)


// NEW WAY Object Inside onject
const person_3 = {
    color_2: "black",
    hand: "two hand",
    age: 31,
    origin_2: "morocco",
    theme : "green_themes",
    langs : {
        html : "70%",
        css : "20%",
        php : "10%",
    }
}

const {color_2 , origin_2, langs: { html, css }} = person_3;

console.log(`the prefer color is ${color_2}, origin is ${origin_2} and progress HTML is ${html} and progress CSS is ${css}`)
