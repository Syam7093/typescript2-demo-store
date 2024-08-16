import { useState } from "react"

export const Incrementvalues=()=>{
    const [number,setnumber]=useState(0);

    const incremet=()=>{
        setnumber(number+1)
    }

    const decrement=()=>{
        setnumber(number-1)
    }

    return{
        number,incremet,decrement
    
    }
}