const ROWS = 3;
const COLUMNS = 5;

// for (let x = 0; x < ROWS; x++) {
// row = row + '*';
// }

// START: build one row
for (let x = 0; x < ROWS; x++) {
  let row = '';
  for (let y = 0; y < COLUMNS; y++) {
    row = row + '*';
  }
  console.log(row);
}

// END

// 1. solve for one row
// 2. repeat to multiple rows
