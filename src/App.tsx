import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Form from './components/Form';
import Increment from './components/Increment';
import Navbar from './components/Navbar';


interface hello{
  data:string,
  setsome:React.Dispatch<React.SetStateAction<string>>
}
export const senddata=createContext<hello>({data:'',setsome:()=>{}});

function App() {
  const [data,setsome]=useState<string>("")
  return (
    <div className="App">
      
     <BrowserRouter>
     <senddata.Provider value={{data,setsome}}>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Form></Form>}></Route>
      <Route path="/inc" element={<Increment></Increment>}></Route>
     </Routes>
     </senddata.Provider>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
