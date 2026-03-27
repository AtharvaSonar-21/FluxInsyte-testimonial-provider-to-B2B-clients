import Home from "../Pages/public/Home";
import { Route,Routes } from "react-router-dom";
import Login from "../Pages/public/Login";
import Signup from "../Pages/public/Signup";

function AppRoutes() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      {/* <Route path='/About' element={<About/>}/> */}
      
    </Routes>
    
    </>
  )
}

export default AppRoutes;
