let multiplier;
let num;
let result
let line='';

for(multiplier=1; multiplier<=10; multiplier++)
{

 for (num = 1; num<=10; num++) { 
    
    result=num*multiplier;
    line+=result+'\t';
   
    if(num==10)
    {
        line+=('\n')
    }
} 

}
console.log(line); 
console.log(line.length)    

// Tried so many times to comine table4.js with table3.js to achieve the desired results but failed!!!!!!!!!!!!
// But I will sort it out when I will be a Pro...
// I wanted to insert the while loop in the for loop for adding the spaces to achieve the results like table5.js.