//Hexagon with for loop
console.log(`****H-E-X-A-G-O-N****`);

let height = 7;

for (let i = 1; i <= height; i++) {
  let line = '';

  for (let j = 1; j <= height - i; j++) {
    line += ' ';
  }
  for (let k = 1; k <= height + i; k++) {
    line += '**';
  }

  console.log(line);
}
for (let i = 1; i < height; i++) {
  let line = '';
  for (let m = height + 1; m <= height + i; m++) {
    line += ' ';
  }
  for (let j = 1; j <= height; j++) {
    line += '**';
  }
  for (let k = 1; k <= height - i; k++) {
    line += '**';
  }

  console.log(line);
}

console.log(`****H-E-X-A-G-O-N****`);
