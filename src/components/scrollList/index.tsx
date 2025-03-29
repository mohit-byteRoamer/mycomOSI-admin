import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { memo, useEffect, useRef, useState } from "react";
import Style from "./style";
import { debounce } from "../../utils/global-func";
import { ITEMS_PER_PAGE } from "../../constants/dummy";
import { ScrollListProps } from "../type";

const ScrollList = ({ sideBarOpen, title, dummyData, }: ScrollListProps) => {
    const scrollRef = useRef(null);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("md"))

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);
    const [paginatedData, setPaginatedData] = useState(dummyData?.slice(0, ITEMS_PER_PAGE));
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 10 && currentPage < totalPages) {
                debounce(() => setCurrentPage((prev) => prev + 1))
            }
        }
    };

    useEffect(() => {
        if (currentPage > 1) {
            const newData = dummyData.slice(0, currentPage * ITEMS_PER_PAGE);
            setPaginatedData(newData);
        }
    }, [currentPage]);
    return (
        <Grid
            sx={{
                ...Style.cardWraper,
                width: { xs: "100%", sm: sideBarOpen && isXs ? "100%" : "49%", md: "32%" },
            }}
        >
            <Box sx={Style.cardContainer}>
                <Box sx={Style.cardHeader}>
                    <Typography
                        sx={Style.cardTitleText}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box
                    ref={scrollRef}
                    sx={Style.scrollContainer}
                    onScroll={handleScroll}
                >
                    {paginatedData.map((item: any, index: number) => (
                        <Box
                            key={index}
                            sx={Style.itemBox}
                        >
                            <Typography className="!text-sm"  >
                                {item.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Grid>
    )
}

export default memo(ScrollList)