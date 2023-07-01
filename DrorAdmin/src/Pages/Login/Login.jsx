import {
  Box,
  Button,
  Container,
  InputAdornment,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import image from "../../assets/faceOverlay.png";
import { useState, useContext } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import LoginContext from "../../Context/LoginContext";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState();

  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
  });

  const { setLoginStatus } = useContext(LoginContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    e.target.name === "password" && showPassword && setShowPassword(false);
    setErrors(false);
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value?.trim(),
    });
  };
  const onLogin = () => {
    if (!userCredentials.userName || !userCredentials.password) {
      setErrors("Please fill all fields");
      return;
    } else {
      setErrors("");
      setLoginStatus(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid black",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          flexDirection: "column",
          height: "60vh",
          width: "25vw",
          justifyContent: "space-around",
          marginTop: "10vh",
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            sx={{
              mb: 3,
              width: "10vw",
              height: "20vh",
            }}
            alt="logo"
            src={image}
          />

          <Box
            sx={{
              mb: 10,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "18vh",
            }}
          >
            <FormControl
              style={{ width: "20vw", height: "4vh" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-username">
                UserName
              </InputLabel>
              <Input
                id="filled-adornment-username"
                type="text"
                name="userName"
                value={userCredentials.userName?.trim()}
                style={{ marginTop: "2vh" }}
                onChange={(e) => {
                  handleChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <PersonIcon style={{ color: "#757575" }} />
                  </InputAdornment>
                }
                error={errors && userCredentials.userName?.length === 0}
              />
              <FormHelperText error={true}>
                {userCredentials.userName?.length === 0 && errors}
              </FormHelperText>
            </FormControl>
            <FormControl
              style={{ width: "20vw", height: "4vh" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Input
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={userCredentials.password?.trim()}
                style={{ marginTop: "2vh" }}
                onChange={(e) => {
                  handleChange(e);
                }}
                endAdornment={
                  <InputAdornment
                    position="end"
                    style={{ marginRight: "0.2vh" }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                error={errors && userCredentials.password?.length === 0}
              />
              <FormHelperText error={true}>
                {userCredentials.password?.length === 0 && errors}
              </FormHelperText>
            </FormControl>
          </Box>

          <Box sx={{ m: 4, display: "flex", justifyContent: "center" }}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              style={{
                width: "20vw",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
              onClick={onLogin}
              disabled={errors}
            >
              log in
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
