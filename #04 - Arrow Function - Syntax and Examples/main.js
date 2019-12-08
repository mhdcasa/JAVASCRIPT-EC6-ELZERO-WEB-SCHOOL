/*

Arrow Function

1->Don't replae regular function
*/

function regular(){
    return "this regulare function";
}

console.log(regular());


let functionInsideLet = function(){
    return "this is function inside Let";
}

console.log(functionInsideLet());

// let functionArrow = function(){
//     return "this is function inside Let";
// }

let functionArrow = () => { // kan7ayad juste le mot Function o kanremplaciha par => arrow o katwali comme ca ()=>
    return "this is arrow function";
}

console.log(functionArrow());

// au cas j'ai juste une seule statmenet le syntax sera

let functionArrowOneStatement = () =>  "this is arrow function with one statments";

console.log(functionArrowOneStatement());

// au cas j'ai aucune parametre

let functionArrowwithoutPramaters = _ =>  "this is function haven't any parameters";
console.log(functionArrowwithoutPramaters());


// au cas j'ai des parametres

let functionArrowWithPramaters = (param) => "this is arrow function with param "+ param*2;
console.log(functionArrowWithPramaters(10));


// au cas j'ai une seule parametre

let functionArrowWithOnePramaters = param => "this is arrow function with One param "+ param*2;
console.log(functionArrowWithOnePramaters(50));

// au cas de j'ai plusieurs parametre

let functionArrowWithMultiPramaters = (param1,param2) => "this is arrow function with Multiple param "+ param1*param2;
console.log(functionArrowWithMultiPramaters(50,100));

