import React from 'react'
import { useState } from 'react'

function Cashify() {

    const [bill , setBill] = useState(0);
    const [given ,setGiven] = useState(0);
    const [ans , setAns] = useState([]);

    function bills()
    {
        const arr = [2000, 500 ,200 , 50 ,  100 , 20 ,10 ,1]
        const bill = [];
        var amount = given-bill;
        console.log(amount)
        arr.map((data)=>{
         const noofnotes  =    Math.trunc(amount/data);
         amount =amount%data;
       bill.push(noofnotes);
        })
setAns(bill);
console.table(bill)

        
    }


  return (
    <>
    <nav>Bill Generator 😀</nav>
    <div className="container">

        <label>Total Amount</label>
        <input onChange={(e)=>setBill(e.target.value)}></input>
        <label>Customer Given</label>
        <input onChange={(e)=>setGiven(e.target.value)}></input>
        <button onClick={bills}>Bill Amount</button>
        <p1></p1>
<table><tr><th>
    2000 </th><th>500</th><th>200</th><th>100</th><th>50</th><th>20</th><th>10</th><th>1</th>
    </tr>
    <tr>
        {
            ans.map((data)=>{
return(
    <>
    <td>{data}</td>
    </>
)
            })
        }
        
    </tr>
    
    </table>

    </div>
    </>
  )
}

export default Cashify
