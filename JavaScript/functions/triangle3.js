//triangle exercise
function triAngle(height) {
  let row;
  let tot = '';
  for (i = 0; i <= height; i++) {
    row = '';
    for (j = 0; j <= height - i; j++) {
      row += ' ';
    }
    for (k = 0; k <= i; k++) {
      row += '**';
    }
    tot += row + '\n';
  }
  return tot;
}
let tot = triAngle(15);
console.log(tot);
