import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box, ButtonBase } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { SidebarProps } from "../type";
import Style from "./style";

function Sidebar({ isXs, drawerHandler, isOpen }: SidebarProps) {
    return (
        <Box sx={Style.container}>
            <Box sx={{ width: "100%" }}>
                <Typography
                    variant="h6"
                    className="text-primary bg-white p-4 pb-2 text-center !text-2xl !font-semibold"
                >
                    mycom<span className="text-apple-green">OSI</span>
                </Typography>

                <Typography
                    variant="h6"
                    className="text-rhino-gray !m-0 !p-0 !pb-4 bg-white text-center !text-2xl !font-semibold"
                >
                    Alnsights
                </Typography>
                <Divider />

                <List className="bg-primary">
                    <ListItem
                        component={ButtonBase}
                        onClick={isXs ? drawerHandler : undefined}
                    >
                        <ListItemIcon><DashboardIcon className="!text-white" /></ListItemIcon>
                        <ListItemText className="!text-white" primary="Dashboards" />
                    </ListItem>
                    <ListItem
                        component={ButtonBase}
                        onClick={isXs ? drawerHandler : undefined}
                    >
                        <ListItemIcon><StorageIcon className="!text-white" /></ListItemIcon>
                        <ListItemText className="!text-white" primary="Resource" />
                    </ListItem>

                </List>
            </Box>
            {isXs && <Box sx={Style.bottomButton}>
                {
                    isOpen &&
                    <button onClick={drawerHandler}>
                        <ArrowCircleLeftIcon
                            onClick={drawerHandler}
                            className="!text-white object-contain !w-10 !h-10" />
                    </button>
                }
            </Box>}
        </Box>
    );
}

export default Sidebar;
