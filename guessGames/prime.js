// We need Prime numbers from 1 to 10
// and it shouldn't be fixed to 10(counter=number)
// if we change the value of 10 to a greater number it should print all the numbers in between

let strng = " "

for (var counter = 1; counter <= 100; counter++) { //we generate numbers from 1 to 10 with a for loop
                                                    
    var notPrime = false;                       //Then we make a variable called a not prime. 
    for (var i = 2; i <= counter; i++) {        // then we pick the prime numbers with if inside the for loop;
        if (counter%i===0 && i!==counter) {     //it means if the counter or number divided by the current generated.. 
            notPrime = true;   
        }                                           // .. it is not a prime number.
    }
    if (notPrime === false) {                       
        strng += ` ${counter}  `;                  //.. number is equal to 0 and also not equal to the counter then...  
    }
}
console.log(strng);
