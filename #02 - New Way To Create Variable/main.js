/*

let,const

var
-Function scope
-Can be redeclare
-"Undefined" when accessiong variable before it's declared

let
-Block scope
-Can't be redeclare
-"Reference Error" when accessiong variable before it's declared  

const
-Block scope
-Can't be redeclare
-"Reference Error" when accessiong variable before it's declared  

*/

console.log("var : -Function scope")
function varTest() {
    var x = 1;
    if (true) { // ila kant kayna chi condition
        var x = 2; //redclare donc kay2écrazi liya lawal (donc kangolo l 
        // variable accessible ndkhol lih mn ay blas f fonction o nmodifier fih)
        console.log(x);
    }
    console.log(x);
    return 'Done';

}
console.log(varTest());




// ================================================================================================================


console.log("let : block scope")

function letTest() {
    let x = 1;
    if (true) { // ila kant kayna chi condition
        let x = 2;  //let ma kan9darch ndkhol 3loh ola nmodifier fih f nafs l block c'est  a dire meme fonction
        console.log("inside if condition "+x);
    }
    console.log(x);
    return 'Done';

}
console.log(letTest());

console.log("Assign");
let x = 1;
x = 2; // f had le cas ma dartch redeclare lx mais dart assign c'est a dire badalt juste la valeur
console.log(x);


var nom ="naimi";
let prenom="mehdi";
console.log(window.nom); 
//window hiya this o hna kan9sad biha had lpage  o hiya f nafs wa9t objet li kaycrééer liya properties smitha nom 7it nom ghir variable
//ana khdam fiha dpn f variable accesbile mn ay blas f had window par contre let ma n9darch ndkhol liha mn ay blasa
console.log(window.prenom);

console.log(window);