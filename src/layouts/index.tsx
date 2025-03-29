import { useState } from "react";
import {  Drawer, Box, useMediaQuery, useTheme } from "@mui/material";

import Style from "./style";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { StaticBreadcrumbs } from "./staticBreadcrumbs";


function AppLayout() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"))

    const [open, setOpen] = useState(true);
    const handleClick = () => setOpen(!open)


    return (
        <Box sx={Style.container}>

            {/* D R A W E R  S E C T I O N */}
            <Drawer
                variant="persistent"
                open={open}
                sx={{ ...Style.sideBarContainer, width: open ? 270 : 0 }}
            >
                <Sidebar isOpen={open} isXs={isXs} drawerHandler={handleClick} />
            </Drawer>

            {/* C O N T E N T  S E C T I O N */}
            <Box sx={{
                ...Style.leftSideContainer,
                display: { xs: open ? "none" : "block", sm: "block" },
            }}>
                <StaticBreadcrumbs handleClick={handleClick} />
                <Dashboard sideBarOpen={open} />
            </Box>
        </Box>

    );
}

export default AppLayout;
