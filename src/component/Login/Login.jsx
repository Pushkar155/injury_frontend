import React, { useState } from 'react';
import "./login.scss";
import Navbar from '../Navbar/Navbar';
// import App1 from "../../Body";
import Reports from '../Reports/Reports';
import Add from '../addreport/Add';

const Login = () => {
  // var render="";
  const [isclicked,setIsclicked]=useState(false);
  const handeladd = ()=>{
    setIsclicked(true);
  }
  const handelall = ()=>{
    setIsclicked(false);
  }


  return (
    <div className='login'>
        <div className="login_navbar">
            <Navbar type="one"/>
        </div>
        <div className="login_buttons">
          <button onClick={handelall} >All Reports</button>
          <button onClick={handeladd}>Add Report +</button>
        </div>
        <div className="login_body">
           {isclicked ? <Add/> : <Reports/>}
        </div>

    </div>
  )
}

export default Login