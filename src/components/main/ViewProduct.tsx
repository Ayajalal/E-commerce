import React from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {AddShoppingCartOutlined} from "@mui/icons-material";
const ViewProduct=()=>{
    // const toggleDrawer=()=>{}
    return<Box display={"flex"} alignItems={"center"} gap={3} sx={{ flexDirection:{ xs: "column", sm: "row" }}}
>
        <Box  display={"flex"} width={360}>
<img width={'100%'} src={"src/assets/product1/final.png"} alt={"image product"}/>
        </Box>
        <Box  sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
            <Typography gutterBottom variant="h5" >
            Women's fathion
            </Typography>

            <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                $12.9
            </Typography>


    <Typography variant="body1" >
        Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica
    </Typography>
            <Stack direction={"row"} >
                {
                    ["src/assets/product1/final.png","src/assets/product1/images.jpg"].map((item=>{
                        return(
                            <Box
                                key={item}
                                sx={{
                                width: "110px",
                                height: "110px",
                                mx: 1,
                                p: "0",
                                opacity: "0.5",
                            }}>
                                <img

                                    style={{borderRadius: 3}}
                                    height={"100%"}
                                    width={"100%"}
                                    src={item}
                                    alt=""
                                />
                            </Box>
                        )
                    }))
                }
            </Stack>
            <Button
                sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                variant="contained"
            >
                <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                Buy now
            </Button>
        </Box>
    </Box>
}
export default ViewProduct