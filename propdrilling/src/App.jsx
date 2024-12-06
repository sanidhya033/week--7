import { useState } from "react"


function App() {
  const [count,setcount]= useState(0);
  
  return (
    <div>
    <Count count={count} setcount={setcount}/>
    {/* <Buttons count={count} setcount={setcount}/> */}
    </div>
  )
  // to put buttons in count you need to pass setcount as a prop even tough it 
  // does not need it 
}

function Count({count,setcount}){
return <div>
  {count}
  <Buttons count={count} setcount={setcount}/>
</div>
}
// count acted as a mediator
// here count is taking set count and passing it down to buttons 
// this is called prop drilling when one child needs it and parent has it
// every middle child should have it to pass it down 
function Buttons({count,setcount}){
 return <div>
   <button onClick={()=>{
        setcount(count+1);
    }}>Increasing the count</button>
    
    <button onClick={()=>{
         setcount(count-1);
     }}>Decreasing the count</button>

 </div>
} 
export default App
