/*
    Destructuring
    -Object
    -Array
    -Parameters    
*/

// let one     = "Default",
//     two     = "Default",
//     three   = "Default";

const food  = ["pizza", "burger","jus"];

const [one, /*Hna kandir skip l 1 élément f array kankahli ghir blasto khawya*/, three, four = "default"] = food;  //F ARRAY KOL POSITION 3ANDI HNA F HAD [one, two, three] kayamatal liya valuer f array
// [one, two, three] = food; //Pour eviter redeclar je dois effacer keyword conts
console.log(`${one}, ${three}, ${four}`);


console.log("===========================================#15 - Destructuring Array Part 2============================================")


const food_2  = ["pizza", "burger","jus",["banana","kiwi","orange"],"pear", "apple","meo"];
const[one_2,two_2, three_2, [fr1, fr2, fr3], four_2 = "default", ...otherFood_2] = food_2;
console.log(`${one_2},${two_2}, ${three_2}, ${four_2},${fr1}, ${fr2}, ${fr3}`);





