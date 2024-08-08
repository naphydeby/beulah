



import {  useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidenav from './component/Sidenav.jsx';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import Userpage from './component/Pages/Userpage.jsx';
import Userpage1 from './component/Pages/Userpage1.jsx';
import Signin from './component/Signin/Signin.jsx';
import Superadminsignin from './component/Signin/Superadminsignin';
import Manageadmins from './component/Pages/Manageadmins.jsx';
import AddAdmin from './component/Signin/AddAdmin.jsx';
import Managesidenav from './component/Managesidenav.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  

  return (
    <div>
      
      {!isLoginPage && <Sidenav /> }
      <div>{children}</div>
    </div>
  );
};

const Layout2 =({children})=>{
 const location = useLocation();
 const isAdminLoginPage = location.pathname === '/superadminsignin';
 return(
  <div>
    {!isAdminLoginPage && <Managesidenav/>}
  <div>{children}</div>
  </div>
 );
} ;
  const App =()=> {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Avenir';
  },[]);
  return (
    <Router>
     
      
      <Layout>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/userpage1" element={<Userpage1 />} />
           </Routes>
          </Layout>
      <Layout2>
      <Routes>
          <Route path="/superadminsignin" element={<Superadminsignin />} />
          <Route path="/manageadmins" element={<Manageadmins />} />
          <Route path="/addadmin" element={<AddAdmin/> } />
       </Routes>
      </Layout2>

    </Router>
  );

}

export default App














 











