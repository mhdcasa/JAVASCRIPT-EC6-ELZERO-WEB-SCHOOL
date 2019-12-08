/*

Spread Operators or Spread Syntax ...

Had spread Operators kayakhod l Objet ola l Array o kaydir lihom expanded kol 7aja f blastha

*/

let arrayOne = [1,2,3],
    arrayTwo = [4,5,6],
    customArry = [...arrayOne, ...arrayTwo, 7,8,9,10,11,12,13,14,15,16,17,18,19,20]


console.log(customArry);
console.log(arrayOne.concat(arrayTwo));

let AllArrays = [...arrayOne, ...arrayTwo];

console.log(AllArrays);

function sum(x,y,z){
    return x+y+z;
}

console.log(sum(2,6,9));

const myNumbers =  [1,9,3];

console.log(myNumbers);
console.log(...myNumbers);
console.log(sum(...myNumbers));


let arrayfor = [1,2,3],
    arrayFive = [...arrayfor];
arrayFive.push(4);
console.log(arrayFive);   


let myOwnArray = [10 , 50 , -20, -10];
console.log(Math.min(...myOwnArray));




