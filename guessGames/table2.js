let multiplier;
let num;
let result
let line='';

for(multiplier=1; multiplier<=10; multiplier++)
{

    for (num = 1; num<=10; num++) { 
    
        result=num*multiplier;
        line+=result+'\t';
   
        if(num==10) {
        line+=('\n')
        }
    } 
    
     
    console.log('\n')

    console.log(line);     

}
// Explained in table5.js also see the comments in table3.js.