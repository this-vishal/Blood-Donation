import React from 'react'
import {Route,Routes} from 'react-router-dom';
import AdminPanel from './AdminLayout/AdminPanel';
import Donar from './Adminpages/Donar';
import Needer from './Adminpages/Needer';
import AdminLogin from './AdminLogin';
import Error from '../Pages/Errorpage/Errorpage';
function Adminroutes() {
  
  return (
    <>

    <AdminPanel>
     <Routes>
    <Route path='/donar'  element={<Donar/>}/>
    <Route path='/needer' element={<Needer/>}/>
    {/* <Route path="*" element={<Error/>}></Route> */}
     </Routes>
    </AdminPanel>
  
    </>
  )
}

export default Adminroutes