import{useState}from "react";
function Add(){
    let[count,setNum]=useState(0)
    const add=()=>{
        setNum(count+1)
        
    }
    const sub=()=>{
        setNum(count-1)
    }
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={add} style={{ marginRight: "10px" }}>add</button>
            <button onClick={sub}>subtract</button>
        </div>
    )
}


export default Add;
