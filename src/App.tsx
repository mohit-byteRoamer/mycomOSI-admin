import { useState } from "react";
import { Typography, Drawer, Box, Link, Breadcrumbs, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Style from "./style"

function App() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"))

  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open)


  return (
    <Box sx={Style.container}>
      <Drawer
        variant="persistent"
        open={open}
        sx={{ ...Style.sideBarContainer, width: open ? 270 : 0}}
      >
        <Sidebar isOpen={open} isXs={isXs} drawerHandler={handleClick} />
      </Drawer>

      <Box sx={{
        ...Style.leftSideContainer,
        display: { xs: open ? "none" : "block", sm: "block" },
      }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/web-aiops">
            Web-Aiops
          </Link>
          <Link underline="hover" color="inherit" href="/dashboard">
            Dashboard
          </Link>
          <Typography color="text.primary">PmuNavigationView</Typography>
          <MenuIcon sx={{ ml: 5 }} fontSize="small" onClick={handleClick} />
        </Breadcrumbs>
        <Dashboard sideBarOpen={open} />
      </Box>
    </Box>

  );
}

export default App;
