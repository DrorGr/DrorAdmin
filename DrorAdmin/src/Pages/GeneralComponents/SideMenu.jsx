import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import Mail from "@mui/icons-material/Mail";

const data = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  { name: "Users", icon: <DraftsIcon /> },
  { name: "Roles", icon: <CheckBoxOutlineBlankIcon /> },
  { name: "Search", icon: <Mail /> },
];

// eslint-disable-next-line react/prop-types
const SideMenu = ({ setSidebarOpen, isSidebarOpen }) => {
  const getList = (isSidebarOpen) => (
    <div
      style={{
        width: isSidebarOpen ? 250 : 60,
        height: "100%",
        paddingTop: "8vh",
        transition: "width 0.5s",
        overflow: "hidden",
      }}
      onClick={() => setSidebarOpen(false)}
    >
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon onClick={() => setSidebarOpen(false)}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            style={{
              whiteSpace: "nowrap",
            }}
            onClick={() => setSidebarOpen(false)}
            primary={item.name}
          />
        </ListItem>
      ))}
    </div>
  );
  return (
    <Box sx={{ position: "fixed" }}>
      <Drawer
        variant="permanent"
        open={isSidebarOpen}
        anchor={"left"}
        onMouseEnter={() => !isSidebarOpen && setSidebarOpen(true)}
        onMouseLeave={() => isSidebarOpen && setSidebarOpen(false)}
      >
        {getList(isSidebarOpen)}
      </Drawer>
    </Box>
  );
};
export default SideMenu;
