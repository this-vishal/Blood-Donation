import React, { useState } from "react";
import "./adminlogin.css";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AdminLogin() {
const navigate = useNavigate()
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
    const handleLogin = async()=>{
      console.log(1);
      const data = {
        email :email,
        password:password
    }
    
    await axios.post('http://localhost:9000/admin-login', data)
    .then(response => {
      console.log('Response:', response.data);
       if(response.data.login === true){
        localStorage.setItem("AdminLogin", "true");
        navigate("/admin/donar")
       }else{
        localStorage.setItem("AdminLogin", "false");
       }
    })
    .catch(error => {
      console.error('Error:', error);
    });

            

    }



  return (
    <div className="main-login-div">
      <div class="login-container">
        <div class="login-box">
          <h2>Login</h2>
          <div className="login-box-color">
            <div class="form-group">
              <input
                type="text"
                id="username"
                onChange={(e)=>setEmail(e.target.value)}
                name="username"
                placeholder="USERNAME"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}

                placeholder="PASSWORD"
              />
            </div>
            <button onClick={()=>handleLogin()}>Submit</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
