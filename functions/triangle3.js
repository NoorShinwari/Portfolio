function triAngle(height) {
    let row ;
    for (i = 0; i <= height; i++){ 
        row = "";
        for (j = 0; j <=(height -i); j++) {
        row += " ";
        } for (k = 1; k <= i; k++) {
            row += "**";
        } console.log(row);
    }
}
triAngle(15)