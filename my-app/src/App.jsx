import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidenav from "./component/Sidenav.jsx";
import Home from "./component/Pages/Home.jsx";
import Membership from "./component/Pages/Membership.jsx";
import Userpage from "./component/Pages/Userpage.jsx";
import Userpage1 from "./component/Pages/Userpage1.jsx";
import Signin from "./component/Signin/Signin.jsx";
import Superadminsignin from "./component/Signin/Superadminsignin";
import Manageadmins from "./component/Pages/Manageadmins.jsx";
import AddAdmin from "./component/Signin/AddAdmin.jsx";
import Managesidenav from "./component/Managesidenav.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isAdminLoginPage = location.pathname === "/superadminsignin";

  return (
    <div>
      {!isLoginPage && !isAdminLoginPage && <Sidenav />}
      

      <div>{children}</div>
    </div>
  );
};
const AdminLayout = ({ children }) => {
  const Location = useLocation();
  const isAdminLoginPage = location.pathname === "/superadminsignin";
  return (
    <div>
      {!isAdminLoginPage && <Managesidenav />}
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#EBEBEB";
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Avenir";
  }, []);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Signin />
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/membership"
            element={
              <Layout>
                <Membership />
              </Layout>
            }
          />
          <Route
            path="/userpage"
            element={
              <Layout>
                <Userpage />
              </Layout>
            }
          />
          <Route
            path="/userpage1"
            element={
              <Layout>
                <Userpage1 />
              </Layout>
            }
          />
          <Route
            path="/superadminsignin"
            element={
              <AdminLayout>
                <Superadminsignin />
              </AdminLayout>
            }
          />

          <Route
            path="/manageadmins"
            element={
              <AdminLayout>
                <Manageadmins />{" "}
              </AdminLayout>
            }
          />

          <Route
            path="/addadmin"
            element={
              <AdminLayout>
                <AddAdmin />
              </AdminLayout>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
