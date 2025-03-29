import { Box, Grid, Typography, TextField, IconButton, useTheme, useMediaQuery } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Style from "./style"
import ScrollList from "../scrollList";
import { dummyData, ITEMS_PER_PAGE } from "../../constants/dummy";


function Dashboard({ sideBarOpen }) {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Box sx={{
            ...Style.container,
            flexDirection: { xs: "column", lg: sideBarOpen && isXs ? "column" : "row" },
        }}>
            {/* Left Section */}
            <Grid
                item
                sx={Style.leftSection}
            >
                {/* Title Box */}
                <Box sx={Style.titleBox} >
                    <Typography className="text-white !text-2xl !font-medium">
                        PMU Status Tree
                    </Typography>
                </Box>

                {/* Search Section */}
                <Box sx={Style.searchSection} >
                    <TextField
                        fullWidth
                        label="Search..."
                        variant="outlined"
                        size="small"
                    />
                    <IconButton
                        sx={Style.filterButton}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Box>

                {/* Three Sections */}
                <Grid container spacing={1} sx={{ width: "100%" }}>
                    <ScrollList sideBarOpen={sideBarOpen} title={"PMU Tree"} dummyData={dummyData.pmuTree} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
                    <ScrollList sideBarOpen={sideBarOpen} title={"MOI Tree"} dummyData={dummyData.moiTree} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
                    <ScrollList sideBarOpen={sideBarOpen} title={"KPI's Tree"} dummyData={dummyData.kpiTree} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
                </Grid>

            </Grid>

            {/* Right Section */}
            <Grid
                item
                md={6}
                sx={Style.rightSection}
            >
                <Box sx={Style.rightWraper} >
                    <Box sx={{}}>
                        {/* TOP */}
                        <Box
                            sx={Style.rightWraperTop}>
                            <Box
                                sx={Style.header}
                            >
                                <Typography className="text-white !text-2xl !font-semibold">
                                    PMU Anomaly Details
                                </Typography>
                            </Box>
                            <Box sx={Style.box}>
                                <Box sx={Style.whiteBox} >
                                    <Box
                                        sx={Style.gradiantBox}
                                    >
                                        {/* Your content (like an icon) goes here */}
                                    </Box>
                                </Box>
                                <Box sx={Style.whiteBox} >
                                    <Box
                                        sx={Style.gradiantBox}
                                    >
                                        {/* Your content (like an icon) goes here */}
                                    </Box>
                                </Box>
                                <Box sx={Style.whiteBox} >
                                    <Box
                                        sx={Style.gradiantBox}
                                    >
                                        {/* Your content (like an icon) goes here */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>


                        {/* BOTTOM */}
                        <Box sx={Style.bottom}>
                            <Box sx={Style.bottomHeader}>
                                <Typography className="text-white !text-xl !font-medium">
                                    Prediction Chart
                                </Typography>
                            </Box>
                            <Box sx={Style.bottomDate}         >
                                <Typography className="text-black !mt-4 !text-xl !font-semibold">
                                    2024-06-17
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>


        </Box >);
}

export default Dashboard;
