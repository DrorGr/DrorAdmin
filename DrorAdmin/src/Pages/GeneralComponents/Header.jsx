import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CircleFlag } from "react-circle-flags";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const languages = { English: "us", Hebrew: "il", Russian: "ru" };

// eslint-disable-next-line react/prop-types
const Header = ({ setSidebarOpen, isSidebarOpen, handleLogout }) => {
  const [anchorEllanguages, setAnchorEllanguages] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [languageFlag, setLanguageFlag] = useState("us");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenlanguagesMenu = (event) => {
    setAnchorEllanguages(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlelanguagesMenu = () => {
    setAnchorEllanguages(null);
  };

  return (
    <AppBar position="fixed" sx={{ width: window.innerWidth, left: 0, top: 0 }}>
      <Toolbar
        disableGutters
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          width: "98%",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <MenuIcon
            onClick={(e) => {
              e.preventDefault();
              setSidebarOpen(!isSidebarOpen);
            }}
            onMouseClick={(e) => {
              e.preventDefault();
            }}
          />
        </Typography>

        <Box
          sx={{
            display: "flex",
            width: "10vw",
            justifyContent: "space-around",
          }}
        >
          <Tooltip title="Open languages">
            <IconButton
              onClick={handleOpenlanguagesMenu}
              onMouseEnter={handleOpenlanguagesMenu}
            >
              <Avatar
                alt="Remy Sharp"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
              >
                <CircleFlag countryCode={languageFlag} height="40" width="40" />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "49px" }}
            id="menu-appbar"
            anchorEl={anchorEllanguages}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={Boolean(anchorEllanguages)}
            onClose={handlelanguagesMenu}
          >
            {Object.entries(languages).map(([key, value]) => (
              <MenuItem
                key={key}
                onClick={() => {
                  handlelanguagesMenu();
                  setLanguageFlag(value);
                }}
              >
                <Typography textAlign="center">{key}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0 }}
              aria-label="account of current user"
              onMouseEnter={handleOpenUserMenu}
            >
              <Avatar
                alt="Remy Sharp"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "49px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  handleCloseUserMenu();
                  console.log(setting === "Logout");
                  setting === "Logout" && handleLogout();
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
