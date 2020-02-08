/*
ASCII Button
*********
*       *
* Hello *
*       *
*********
*/
let row;
let star = "";
let word = "Hello";


for (let x = 0; x < 5; x++){ 
   let star = '\n';
for (row = 1; row <= 10; row++) {
    

    star += "*  ";
}
console.log(star);
}
console.log(star.length);
