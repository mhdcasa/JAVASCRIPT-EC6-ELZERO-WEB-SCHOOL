/*
Map
*/


var user = {} ; //empty Object

user['username'] = "Mehdi";

user.website = "Elzero.org";
user["10"]="String value";
user[10]="Number value";
user["10"]="String  value";

//OBJET KAY7AWAL GA3L L KEY L STRING o hoka 
//kaybda idir override ya3ni kayakhod l key lakhar b7al daba hna chad liya 10 tanya o raja3ha string o écrasa lawla


console.log(user);
console.log(user.username);
console.log(user["website"]);

let myMap = new Map();

    myMap.set("10","String");
    myMap.set(10,"Number");
    myMap.set(false,"Boolean");
    myMap.set({a:1,b:2,c:3},"Object");
    myMap.set(function do_silething() {}, "Function");
    myMap.set("fonctionalité", "développer");

// MAP kaykhalli dak L key b nafs type li 3titih

console.log(myMap);

let myMap2 = new Map([
    ["10","String"],
    [10,"Number"],
    [false,"Boolean"],
    [{a:1,b:2,c:3},"Object"],
    [function do_silething() {}, "Function"],
    ["fonctionalité", "développer"],


]);




console.log(myMap2);



