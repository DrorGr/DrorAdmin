import Header from "../GeneralComponents/Header";
import SideMenu from "../GeneralComponents/SideMenu";
import { useState, useContext } from "react";
import LoginContext from "../../Context/LoginContext";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { setLoginStatus } = useContext(LoginContext);
  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        handleLogout={() => setLoginStatus(false)}
      />
      <SideMenu isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}
    </>
  );
};

export default Layout;
