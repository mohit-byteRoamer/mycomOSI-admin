const Style = {
    container: {
        display: "flex",
        gap: "10px",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5"
    },
    sideBarContainer: {
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "250px", md: "22%",lg:"250px" },
            margin: { xs: "0", md: "15px" },
            boxSizing: "border-box",
            backgroundColor: "#00475c",
            borderRadius: "20px",
        },
    },
    leftSideContainer: {
        flexGrow: 1,
        bgColor:"red",
        p: "10px",
        pt: "15px"
    }

};

export default Style;
