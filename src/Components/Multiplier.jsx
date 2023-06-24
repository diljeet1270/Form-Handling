import React, { useState } from "react";
import Display from "./Display";
const Multiplier = ()=>{
    const [val, setVal] = useState(2);
    const handleMultiplie=(multiple)=>{
        setVal(val*multiple)
    }

    return (
        <>
        <h2>Multiplier</h2>
        <button onClick={()=>handleMultiplie(2)}>X2</button>
        <button onClick={()=>handleMultiplie(4)}>X4</button>
        <button onClick={()=>handleMultiplie(8)}>X8</button>
        <button onClick={()=>handleMultiplie(10)}>X10</button>
        <input type="number" placeholder="Enter some number" onChange={(e)=>setVal(e.target.value)}/>
        <hr />
        <Display score={val}/>
        </>
    )
}
export default Multiplier;