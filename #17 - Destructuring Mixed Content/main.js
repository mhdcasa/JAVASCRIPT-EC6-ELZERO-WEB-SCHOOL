/*
    Destructuring
    -Object
    -Array
    -Parameters    
*/

const person = {
    user :"mehdi",
    age :31,
    city :"morrocco",
    food : {
        fruit_1 : 'banana',
        fruit_2 : 'kiwi',
        fruit_3 : 'orange',
        jus:["banana jus", "ornage jus", "apple jus"]
    }
}


const {user, age, city, food :{fruit_1, fruit_2,fruit_3 ,jus :[one,two,three]}} = person;

console.log(`name is ${user} age is ${age},
and city ${city} and food is ${fruit_1} && ${fruit_2}
and prefer jus is ${one} && ${two} && ${three}
`)