// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Layout from "./Pages/Layout/Layout";
import MainMenu from "./Pages/MainMenu/MainMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";

import LoginContext from "./Context/LoginContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
]);

function App() {
  const { loginStatus } = useContext(LoginContext);

  return (
    <div className="App">
      {loginStatus ? (
        <div className="App">
          <Layout />
          <RouterProvider router={router} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
