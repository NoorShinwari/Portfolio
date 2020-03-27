// triangle with my own method
function triAngle(height) {
  // we Will be using four loops for this triangle, bear with me please!!

  for (let i = 1; i <= height; i++) {
    let row = '';

    for (let j = 1; j <= height - i; j++) {
      row += ' ';
    }

    for (let k = 1; k <= i; k++) {
      row += '*';
    }
    for (let l = 2; l <= i; l++) {
      row += '*';
    }

    console.log(row);
  }
}

triAngle(10);
