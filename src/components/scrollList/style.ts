const Style = {
  cardWraper: {
    border: "1px solid black",
    borderRadius: 2,
  },
  cardContainer: {
    bgcolor: "white",
    borderRadius: 2,
    boxShadow: 1,
  },
  cardHeader: {
    p: 1.5,
    display: "flex",
    justifyContent: "center",
    bgcolor: "#00475c",
  },
  cardTitleText: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    p: 1,
    height: "60vh",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  itemBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 1,
    p: .5,
    borderRadius: 2,
  },

};

export default Style;
