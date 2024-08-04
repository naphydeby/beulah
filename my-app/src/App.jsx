



import {  useEffect } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Sidenav from './component/Sidenav.jsx';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import Userpage from './component/Pages/Userpage.jsx';
import Signin from './component/Signin/Signin.jsx';




// import Home from './component/Pages/Home.jsx';
// import Membership from './component/Pages/Membership.jsx';
// import Userpage from './component/Pages/Userpage.jsx';










function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
  },[]);

  return (
    <div>
      <Sidenav/>
      {/* sign for a seperate page */}
      {/* <Signin/> */}
      
       <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/membership' element={<Membership/>} />
      <Route path='/userpage' element={<Userpage/>} />
      <Route path='/signin' element={<Signin/>} />
      </Routes>
       
      
       
      
      
      
      {/* <Signin/>
        <Sidebar/>
        
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/membership' element={<Membership/>} />
          <Route path='/userpage' element={<Userpage/>} />
        </Routes>
         */}
      
    </div>
  )
}

export default App













// import React, { useEffect } from "react";
// import './App.css'
// import Signin from "./Component/Signin"
// import Userpg1 from "./Component/Userpg1"


 


// function App (){
//   return(
//     <>
//     {/* <Userpg1/> */}
// <Signin/>
//     </>
//   )
// }
// export default App










