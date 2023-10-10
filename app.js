
let i=1

const print  =()=>{

  console.log(i);

  i++;

  if(i==11){
    clearInterval(interval)
 }

}



 let interval = setInterval(print,1000)

 

  
    