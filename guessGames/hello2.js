let word= 'hello'
let star='*'
    for(let lines=1;lines<6;lines++)
    {
        let columns=''
        let line=''
        for(let columns=1;columns<=word.length+4;columns++)
        
        {       
            if(lines==2 || lines==3 || lines==4)
            {       
                if(lines===2 || lines===4)
                {
                    line+='*       *' 
                    break;
                }
            }  
           
            else
            {
                line+=star 
            }     
        }
        if(lines==3 )
        {
         line+='* '+word+' *' 
        }         
        console.log(line)  
    }