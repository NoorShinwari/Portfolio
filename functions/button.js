/*

*****
*****
*****

*/
/*
// 1. how to build one row?
// 2. how to repeat the process?

function buildRow(columns) {
    let row = "";
    for (let i = 0; i < columns; i++) {
        row += "*";
    }
    return row;
}

function buildButton(rows, columns) {
    let button = '';
    for (let i = 0; i < rows; i++) {
        button += buildRow(columns) + "\n";
    }
    return button;
}
let button = buildButton(3,5);
console.log(button);

////////////////////////////////////////////////////

******
*    *
*    *
******
*/

// 1. how to build a "full " row
// 2. how to build an "empty" row
// 3. how to build the whole button, knowing that:
//  1. the first and last rows are always "full"
//  2. all other rows in betwwn are always "empty"

function buildRow(columns) {
  let row = '';
  for (let i = 0; i < columns; i++) {
    row += '*';
  }
  return row;
}

function buildRowWithSpace(columns) {
  let row = '';
  for (let i = 0; i < columns; i++) {
    if (i == 0 || i == columns - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  return row;
}

function buildRowWithWord(columns, words) {
  let row = '';
  let n = words.length;
  let wordUsed = false;
  let space = parseInt((columns - n - 2) / 2);
  let spacestring = '';
  for (let l = 0; l < space; l++) {
    spacestring += ' ';
  }
  for (let i = 0; i < columns; i++) {
    if (i == 0 || i == columns - 1) {
      row += '*';
    } else {
      if (wordUsed != true) {
        row += spacestring + words;
        wordUsed = true;
        i += n - 1 + space;
      } else {
        row += ' ';
      }
    }
  }
  return row;
}

function buttonBuild(rows, columns, words) {
  let button = '';
  for (let i = 0; i < rows; i++) {
    if (i == 0 || i == rows - 1) {
      button += buildRow(columns) + '\n';
    } else if (i == parseInt(rows / 2)) {
      button += buildRowWithWord(columns, words) + '\n';
    } else {
      button += buildRowWithSpace(columns) + '\n';
    }
  }
  return button;
}

let button = buttonBuild(5, 12, 'No0r');
console.log(button);
