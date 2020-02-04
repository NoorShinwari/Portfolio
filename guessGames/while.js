const numbr = Math.floor(Math.random() * 10 + 1);
let running = true

while(running) {
    let guess = prompt("Enter numbr")
    if (guess == numbr) {
        alert("Congratulation, " + numbr + " was the correct number")
        running = false
    } else if (guess == "exit") {
        alert("Bye bye")
        running = false
    } else {
        alert(guess + " is the wrong number, try again")
    }
} 