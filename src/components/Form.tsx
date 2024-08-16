import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { senddata } from '../App'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'


const Form = () => {
   const {data,setsome}=useContext(senddata)
   const dispatch=useDispatch()
   
    
    const [formdata,setformdata]=useState({name:"",email:"",password:""})
    const [error,seterror]=useState({name:"",email:"",password:""})
    
    useEffect(()=>{
        setsome("SYAM")
        dispatch(setUser("mailapallisyam...."))
    })

    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let one=emailRegex.test(formdata.email)
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
      const some=passwordRegex.test(formdata.password)
    const handlesubmit=()=>{
        
        if(formdata.name.trim()=="")
        {
            seterror((error)=>({...error,name:"name shoud not be empty..."}))
        }
        else if(formdata.name.length<=3)
        {
            seterror((error)=>({...error,name:"name greater than 5 letters..."}))
        }
        else{
            seterror((error)=>({...error,name:""}))
        }

        if(formdata.email.trim()=="")
            {
                seterror((error)=>({...error,email:"email shoud not be empty..."}))
            }
            else if(!one)
            {
                seterror((error)=>({...error,email:"email greater than 5 letters..."}))
            }
            else{
                seterror((error)=>({...error,email:""}))
            }

            if(formdata.password.trim()=="")
            {
                seterror((error)=>({...error,password:"password not be empty..."}))
            }
            else if(!some)
            {
                seterror((error)=>({...error,password:"enter correct password"}))
            }
            else{
                seterror((error)=>({...error,password:""}))
            }
        
        
    }
  return (
    <div>
        <div>
            <label>name</label>
            <input name="name" onChange={handlechange} type="text"></input>
            <span style={{color:"red"}}>{error.name}</span>
        </div>
        <div>
            <label>email</label>
            <input name="email" onChange={handlechange} type="text"></input>
            <span style={{color:"red"}}>{error.email}</span>
        </div>
        <div>
            <label>password</label>
            <input name="password" onChange={handlechange} type="password"></input>
            <span style={{color:"red"}}>{error.password}</span>
        </div>
        <button onClick={()=>{
            handlesubmit()
        }}>submit</button>
        <Outlet></Outlet>
    </div>
  )
}

export default Form