//table with the help of experts
let i;
let string = '';
let j;
let k;
for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    k = i * j;
    if (k.toString().length < 2) {
      k = '  ' + k;
    }
    if (k.toString().length < 3) {
      k = ' ' + k;
    }
    string += k + '\t';
    if (j == 10) {
      string += '\n';
    }
  }
}
console.log(string);
/* Finally did it*/
