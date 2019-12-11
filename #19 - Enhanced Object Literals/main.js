

const username = 'mehdiCasa',
      age      = 30;
      
       
const person = {
    username,
    age
}
console.log(person);

const user = {
    // Method:function(param1){
    //     return param1;
    // }

    Method:function(param1){
        return param1;
    }
}

console.log(user.Method("hello mehdi bo9al"))


console.log('=============================================Computed Object add properieté dynamic dans un objet=============================')

//Normal Variable
const myvariable ="key";

//create New Object

const myObject = {
    myproperty : "myValue",
    [myvariable] : "value"
}

console.log(myObject);