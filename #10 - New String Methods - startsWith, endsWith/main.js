/*
    New String Methods 
    StartWith => string.startWith(Search String, Position = 0)
    endsWith => string.endsWith(Search String, End Position = string.length)
*/


let x = 'Video - Learn How to Leran';
console.log(x.startsWith('Video'));
console.log(x.startsWith('L', 8));
console.log(x.endsWith('an'));
console.log(x.endsWith('an',x.length));
