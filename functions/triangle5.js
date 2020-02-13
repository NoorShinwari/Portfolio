let height = 15;
function line(space,stars) {
    let row = ""
    for (let m = 0; m < space; m++) {
        row += " ";
    }
    for (let n = 0; n < stars; n++) {
        row += "*"
    }   
    for (let n = 1; n < stars; n++) {
        row += "*"
    } 
    console.log(row);
}
let stelle = 1;
for (let i = height; i > 0; i--) {
    line (i,stelle);
    stelle++;
}