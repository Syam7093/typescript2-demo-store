import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Incrementvalues } from './Customehook'
import { senddata } from '../App';
import Child from './Child';
import { useSelector } from 'react-redux';
import axios from "axios"

interface root{
    reusableStore:{
        user:string[]
    }
}
interface datashow{
    image:string,
    price:number,
    title:string
}

const Increment = () => {
    let {number,incremet,decrement}=Incrementvalues();
    const someuser=useSelector((state:root)=>state.reusableStore.user)
    console.log(someuser,"someuser")
    const {data,setsome}=useContext(senddata)
    console.log(data,"jameela")
   
    const getDataFromChild=(e:string)=>{
       console.log(e,"bbbb")
    }
     const [show,stwhow]=useState([])
     useEffect(()=>{
        userdata()
     },[])
    const userdata=async()=>{
    let data=await axios.get("https://fakestoreapi.com/products")
    stwhow(data.data)
    
    }
    const [search,setSearch]=useState('')


    const filterdadta=show.filter((e:datashow)=>{
        return e.title.toLowerCase().includes(search.toLowerCase())
    })
    

    const handleDelete=(s:datashow)=>{
        console.log(s,"ramdhsdos-----")
        let data=filterdadta.filter((e)=>{
            return e!==s
        })
        stwhow(data)

    }

    const [currentpage,setcurrentpage]=useState(1)
    const itemperpage=3

    const lastind=currentpage* itemperpage
    const firstind=lastind-itemperpage
    const pagenation=filterdadta.slice(firstind,lastind)

    let main=[]
    for(let i=1; i<(filterdadta.length/itemperpage);i++)
    {
        main.push(i)
    }

    const handlecprev=()=>{
        if(currentpage>1)
        {
            setcurrentpage(currentpage-1)
        }
    }


  return (
    <div>
<h1>{number}</h1>
<button onClick={incremet}>inc</button>
<button onClick={decrement}>dec</button>
<Child getDataFromChild={getDataFromChild}></Child>
<input type="text" onChange={(e)=>{setSearch(e.target.value)}}></input>


{
    pagenation.map((e:datashow)=>{
        return(
            <div>
                <img src={e.image} height="40px" width="40px"></img>
                <h2>{e.title}</h2>
                <button onClick={()=>{
                 handleDelete(e)
                }}>delete</button>
            </div>
        )
    })
}
         <div>
            <button onClick={()=>{
                handlecprev()
            }}>prev</button>
            {main.map((e)=>{
                return(
                    <button onClick={()=>{
                        setcurrentpage(e)
                    }}>{e}</button>
                )
            })}
         </div>
         <button>next</button>
        <Outlet ></Outlet>
    </div>
  )
}

export default Increment