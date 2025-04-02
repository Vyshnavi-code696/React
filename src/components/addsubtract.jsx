import{useState}from "react";
function Hello(){
    let[name,setName]=useState("Gopika")
    const changeName=()=>{
        setName("Radhika")
        console.log("Radhika")
    }
    return(
        <div>
            <h1>name:{name}</h1>
            <button onClick={changeName}>change</button>
        </div>
    )
}

export default Hello;
