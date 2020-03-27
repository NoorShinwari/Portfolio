// triangle by Mr Patrick
const printMultiple = (n, c) => {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += c;
  }
  return res;
};

const printTriangle = (rows, c) => {
  let stars = 1;
  for (let spaces = rows - 1; spaces >= 0; spaces--) {
    console.log(printMultiple(spaces, ' ') + printMultiple(stars, c));
    stars += 2;
  }
};

printTriangle(30, '*');

/*
const printTriangle = (rows, c) => {
  let stars = 1;
  for (let spaces = rows - 1; spaces >= 0; spaces--) {
    console.log(' '.repeat(spaces) + c.repeat(stars));
    stars += 2;
  }
};

printTriangle(30, '*');

*/
