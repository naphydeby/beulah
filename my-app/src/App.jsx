



import {  useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidenav from './component/Sidenav.jsx';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import Userpage from './component/Pages/Userpage.jsx';
import Userpage1 from './component/Pages/Userpage1.jsx';
import Signin from './component/Signin/Signin.jsx';
import Superadminsignin from './component/Signin/Superadminsignin';

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
  const App =()=> {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
  },[]);
  return (
    <Router>
      {/* super admin yet to be done */}
      {/* <Superadminsignin/> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/userpage1" element={<Userpage1 />} />
        </Routes>

      </Layout>
    </Router>
  );

}

export default App














 











