var notPrime = false;                       //Then we make a variable called a not prime. 
    for (var i = 2; i <= counter; i++) {        // then we pick the prime numbers with if inside the for loop;
        if (counter%i===0 && i!==counter) {     //it means if the counter or number divided by the current generated.. 
            notPrime = true;                     //.. number is equal to 0 and also not equal to the counter then...  
        }                                           // .. it is not a prime number.
    }
    if (notPrime === false) {                       // if the 
                console.log(counter);
    }