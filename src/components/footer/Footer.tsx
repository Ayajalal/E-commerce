import React  from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import {Facebook, Instagram, ShoppingCartOutlined, Twitter} from "@mui/icons-material";
const Footer=()=>{
    return<Box  sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }} >
        <Container>
        <Stack>
            <Box display={"flex"} alignItems={"center"}  justifyContent={"center"}>
             <ShoppingCartOutlined fontSize={"large"} sx={{color: "#fff"}}/>
            <Typography color={"#fff"} variant={"h6"}>E-commerce</Typography>
    </Box>
            <Typography
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                color={"HighlightText"}
                variant="h6"
                sx={{ fontSize: 18 }}
            >
                Get products that fit your styles. Find Your perfect Size In Store. Get Rewards
            </Typography>

            {/*<Facebook sx={{fontSize:"16px", color:"#fff"}}/>*/}
            {/*<Twitter sx={{fontSize:"16px", color:"#fff",mx:1}}/>*/}
            {/*<Instagram sx={{fontSize:"16px" ,color:"#fff"}}/>*/}
        </Stack>

        <Typography
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            color={"HighlightText"}
            variant="h6"
            sx={{ fontSize: 18 }}
        >
            © All rights Reserved terms of Use and Privacy Policy </Typography>
        </Container>
        </Box>
}
export default Footer