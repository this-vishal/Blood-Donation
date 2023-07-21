import "./App.css";
import Landingpage from "./Pages/Landingpage/Landingpage";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./Pages/Gallery/Gallery";
import Error from "./Pages/Errorpage/Errorpage";
import Donar from "./Pages/Donar/Donar";
import BloodNeeder from "./Pages/BloodNeeder/BloodNeeder";
import Adminroutes from "./Admin/Adminroutes";
import AdminLogin from "./Admin/AdminLogin";
import { useEffect, useState } from "react";

function App() {
  const [login ,setLogin]= useState()
  useEffect(()=>{
     const logindata = localStorage.getItem("AdminLogin");
     if (logindata == 'true') {
      setLogin(true);
     }else{
      setLogin(false);
     }
      },[])
  console.log(login);
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>}></Route>
            <Route path="/about-us" element={<About/>}></Route>
            <Route path="/donar" element={<Donar/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/blood-needer" element={<BloodNeeder/>}></Route>
            <Route path='/admin' element={ <AdminLogin/>}/>
            <Route path="/admin/*" element={ <Adminroutes/>}></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </>
  );
}

export default App;
