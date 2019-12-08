/*

Arrow Function

this keyword 
this kataraja3 liya lobjet li 3ayat liya 3la function ta9dar tkon object window ola button object .....
*/

let test = function(){
    document.getElementById('show').innerHTML = this;
}

window.onload = test;
document.getElementById("boutton").addEventListener('click', test);



function Person(){
    this.age = 0;
    setInterval(()=>{
        this.age ++;
        console.log(this.age)
    },1000)

 
}

// console.log(Person());
let user = new Person();



