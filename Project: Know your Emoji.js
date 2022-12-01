import React from 'react'

function Emoji() {
    const [state , setState]  = React.useState("😀");
     const[desc , setDesc] = React.useState("Happy");
function checkimoji(data)
{
 switch (data) {
    case "😀":
        setDesc("Happy One")
        break;
        case "😔":
            setDesc("Sad One")
            break;
            case "😭":
            setDesc("Crying")
            break;
            case "❤️":
            setDesc("Love")
            break;
            case "😤":
            setDesc("Angry")
            break;
 
    default:
        setDesc("Sorry !! not found")
        break;
 }

}


  return (
   <>
   <div className='container'>
    <input placeholder='Type any emoji (😤😀 ❤️😭)and get description of that'  onChange={(e)=>checkimoji(e.target.value)}  />
    <h1 onClick={()=>checkimoji("❤️")}> ❤️</h1>
   </div>
  
   <div className='outercontainer'>
   {desc}


   </div>
   
   </>
  )
}

export default Emoji
