const dashboardStyles = {
  container: {
    p: 1,
    width: "100%",

    display: "flex",
    gap: "10px",
  },

  // L E F T  S E C T I O N
  leftSection: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    bgcolor: "white",
    width: { md: "100%", lg: "50%" },
  },
  titleBox: {
    p: 1.5,
    display: "flex",
    justifyContent: "center",
    bgcolor: "#00475c",
    borderRadius: "10px",
  },
  searchSection: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 2,
    flexDirection: { xs: "column", sm: "row" },
  },
  filterButton: {
    bgcolor: "#00475c",
    color: "white",
    borderRadius: 1,
    width: { xs: "100%", sm: "auto" },
  },

  // R I G H T  S E C T I O N
  rightSection: {
    display: "flex",
    width: { md: "100%", lg: "50%" },
  },
  rightWraper: {
    width: "100%",
    bgcolor: "#00475c",
    borderRadius: 2,
  },
  rightWraperTop: {
    height: "40%",
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px"
  },
  header: {
    p: 1.5,
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  box: {
    p: 1.5,
    width: "100%",
    gap: "2%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  whiteBox: {
    width: "33%",
    height: "150px",
    p: 1.5,
    position: "relative",
    bgcolor: "white",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  gradiantBox: {
    width: "45px", // Adjust size as needed
    height: "50px",
    p: 1.5,
    position: "absolute",
    top: -25,
    left: 15,
    background: "linear-gradient(180deg, #73C46B 0%, #184A2C 100%)", // Green gradient
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
  },

  bottom: {
    height: "400px",
    pt: 3.5,
    px: 1,
    bgcolor: "white",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  bottomHeader: {
    p: 1.5,
    display: "flex",
    justifyContent: "center",
    bgcolor: "#00475c",
    borderRadius: "10px",
  },
  bottomDate: {
    display: "flex",
    justifyContent: "center",
  }

};

export default dashboardStyles;
