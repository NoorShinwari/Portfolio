function triAngle(height) {
    for (let i = 0; i <= height; i++) {
        let row = "";
        for (let j = 0; j <= (height-i); j++) {
            row += "*";
        }for (let k = 0; k <= i; k++) {
            row += "&";
        }for (let l = 0; l <= i; l++) {
            row += "&";
        }for (let m = 0; m <= (height-i); m++) {
            row += "*";
        }
        for (let j = 0; j <= (height-i); j++) {
            row += "*";
        }for (let k = 0; k <= i; k++) {
            row += "&";
        }for (let l = 0; l <= i; l++) {
            row += "&";
        }for (let m = 0; m <= (height-i); m++) {
            row += "*";
        }for (let j = 0; j <= (height-i); j++) {
            row += "*";
        }for (let k = 0; k <= i; k++) {
            row += "&";
        }for (let l = 0; l <= i; l++) {
            row += "&";
        }for (let m = 0; m <= (height-i); m++) {
            row += "*";
        }for (let j = 0; j <= (height-i); j++) {
            row += "*";
        }for (let k = 0; k <= i; k++) {
            row += "&";
        }for (let l = 0; l <= i; l++) {
            row += "&";
        }for (let m = 0; m <= (height-i); m++) {
            row += "*";
        }for (let j = 0; j <= (height-i); j++) {
            row += "*";
        }for (let k = 0; k <= i; k++) {
            row += "&";
        }for (let l = 0; l <= i; l++) {
            row += "&";
        }for (let m = 0; m <= (height-i); m++) {
            row += "*";
        }
        console.log(row)
    }
}
triAngle(12);