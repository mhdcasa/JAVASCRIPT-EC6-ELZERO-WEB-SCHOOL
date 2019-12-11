/*
Set : new set(Iterable(Iterable howa l'élément li ghandir lih loop soit objet soit array ola string))

set B7al array 
set hiya 1 objet li kaykhalik t7at fih data tkon unique o f had objet ma 3doch key

*/

let myBooks =  new Set([1,2,3,4,5,6,6,7,7,8,9]); //set hna ma ghadich i returni liya les doublons

let myArray = [1,2,3,4,5,6,7,7,8,9];
console.log(typeof myBooks);
console.log(myBooks);

console.log(myArray);


let new_array   = [1,2,3,4,5,5,5,6,8,9,9,9,10,10,10];
let array_to_set = new Set(new_array);

console.log(array_to_set);

let set_to_array = ([...array_to_set]);


console.log("Set to Array : " + set_to_array);

