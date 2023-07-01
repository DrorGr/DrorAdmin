import LoginContext from "../../Context/LoginContext";
import { useContext } from "react";

const Logout = () => {
  const { setLoginStatus } = useContext(LoginContext);
  return setLoginStatus(false);
};

export default Logout;
