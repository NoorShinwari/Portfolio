let i; //  numbers in x direction
let j; // numbers in y direction
let prod// x * y = product
let strng = ''; // we put them in a horizontal line.

for ( j = 1; j <= 10; j++){ 
    
    for (i = 1; i <=10; i++) { 
        
        prod = j * i ;
        strng =  "" +prod;
        
        
       while (strng.length<3){
            strng = " "+strng;
            
        }
          strng += '\t'
            
           if (i == 10){
               strng+='\n';
           }


     
    } 
    
    console.log(strng);
}

