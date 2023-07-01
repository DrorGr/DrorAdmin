// import React from "react";
import { Box, Typography } from "@material-ui/core";
import { buttonStyle, TextStyle } from "./MainMenu.style.js";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const Navigate = useNavigate();
  const onSelect = () => {
    Navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: "70vw",
        height: "90vh",
      }}
    >
      <Box
        sx={{ ...buttonStyle, backgroundColor: "#67B2FC" }}
        onClick={onSelect}
      >
        <Typography style={{ ...TextStyle }}>Create User</Typography>
      </Box>
      <Box
        sx={{ ...buttonStyle, backgroundColor: "#77FFC7" }}
        onClick={onSelect}
      >
        <Typography style={{ ...TextStyle }}>Search</Typography>
      </Box>
      <Box
        sx={{ ...buttonStyle, backgroundColor: "#67B2FC" }}
        onClick={onSelect}
      >
        <Typography style={{ ...TextStyle }}>Roles</Typography>
      </Box>
    </Box>
  );
};

export default MainMenu;
