



import {  useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidenav from './component/Sidenav.jsx';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import Userpage from './component/Pages/Userpage.jsx';
import Signin from './component/Signin/Signin.jsx';
import Userpage1 from './component/Pages/Userpage1.jsx';

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
      <Route path='/userpage1' element={<Userpage1/>} />
      </Routes>
       
      
       
      
      
     
      
    </div>
  )
}

export default App














 











