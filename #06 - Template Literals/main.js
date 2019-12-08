/*

 Template Literals [template String]

*/

let thekind = "Female";

let oldWay = "hello mehdi naimi \n"+
"Im from Morocco";

console.log(oldWay);

let newWay= `hello ${thekind==="male" ? "Mr" : "Mrs"} mehdi naimi 
Im ${thekind}
Im from Morocco`;

console.log(newWay);

let username ="mehdi",
    age = 32;

let MarKupHtml = `<div>
<h1>${username}</h1>
<h2>${age}</h2>
</div>`

document.body.innerHTML= MarKupHtml;
