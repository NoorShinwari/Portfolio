// n > 1 and (n % n || 1); 
let n = 10
let i = 2
for (i = 2; i < n; i++) {
    let prime = true;

    for (let m =2; m < i-1; m++)  
    {
        if (i % m == 0){
            prime = false;
        }
    }

    if (prime){
        console.log(i)
    }
}