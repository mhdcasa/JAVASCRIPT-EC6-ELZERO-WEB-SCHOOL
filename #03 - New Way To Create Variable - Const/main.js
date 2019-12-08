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

const SETTINGS = [];
SETTINGS.push('mehdi','jad','aymen','lobna')
console.log(SETTINGS)

const OBJECTS ={
    'nom' : 'Naimi',
    'prenom' : 'mehdi'
};

console.log(OBJECTS);
OBJECTS.nom='hicham';
console.log(OBJECTS);


// ila bghit nbloki chi 1 ma nkhalihch ibadal f objet dyali 
// kandir freeze
Object.freeze(OBJECTS);
OBJECTS.nom='lobna';
console.log(OBJECTS);