import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const StaticBreadcrumbs = ({ handleClick }: { handleClick: () => void }) => (<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
        <HomeRepairServiceOutlined sx={{ mr: 0.5 }} fontSize="small" />
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
</Breadcrumbs>)