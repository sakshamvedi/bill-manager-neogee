import React, { useState } from 'react'

function Birthday() {
const [state , setState] = useState("");
const [user ,setUser] = useState("");
function check()
{
    let x = state;
    x = x.replaceAll("-" ,  "");
    console.log(x);
     let sum = 0;
     while(x!=0)
     {
        sum = sum+x%10;
        x=Math.floor(x/10)
        
     }
     
if(sum%user == 0)
{
    alert("HORRAYYYY !!!! YES IT IS YOUR LUCKY NUMBER ❤️❤️ ")
}

else {
    alert("Sorry !!!! Try any other number")
}
     console.log(sum);

}

  return (

   <div className='container'>
    <label>Birthday</label>
    <input type={"date"} onChange={(e)=>setState(e.target.value)}/>
    <label>Lucky Number</label>
    <input onChange={(e)=>setUser(e.target.value)}/>
    <button onClick={check}>Check </button>
   </div>
  )
}

export default Birthday
