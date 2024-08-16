import React, { useState } from 'react'
interface main{
    getDataFromChild:(val:string)=>void
}
const Child : React.FC<main>= ({getDataFromChild}) => {
    const [childs,setchilds]=useState("RAMESH")
    getDataFromChild(childs)
  return (
    <div>Child</div>
  )
}

export default Child