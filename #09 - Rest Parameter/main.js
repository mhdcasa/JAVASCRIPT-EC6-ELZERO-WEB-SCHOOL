/*

Rest parameters ... 
n9adro ngolo 3liha hiya le contre dyal separated operators 

*/

function total (x,y,z){
    return x+y+z;
}
console.log(total(2,3,6))

console.log("====================ila bghit nkhali le nombre dyal les parametres dynamiques======")

function showInfo(a,b,c, ...otherParams){
    console.log("parameter a : ", a);
    console.log("parameter b : ", b);
    console.log("parameter c : ", c);
    console.log("parameter otherParams : ", otherParams);
    
    return("I add other parameter inser otherParams ")
}

console.log(showInfo(1,2,3,'4','5','6','7','99','58','69','30'));

function AddAll(...myParams){
    let Number = 0;

    for (let myParam of myParams) {
        
         Number = Number + myParam;
    }

    return Number;
}
console.log(AddAll(1))
console.log(AddAll(1,2))
console.log(AddAll(1,2,5,99))
console.log(AddAll(36,36,989))