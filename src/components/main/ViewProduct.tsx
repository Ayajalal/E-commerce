import React from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {AddShoppingCartOutlined} from "@mui/icons-material";
import axios from "axios";
const ViewProduct=({productDetails})=>{
    // const toggleDrawer=()=>{}

    const addToCart=(id,quantity)=>{
        console.log("test33")
        axios.post('https://e-commerce-e1ttlwfwj-ayaismeals-projects.vercel.app/shoppingCart',
            {id:id,quantity:quantity}).then((res)=>{
         console.log(res)
        })
    }
    return<Box display={"flex"} alignItems={"center"} gap={3} sx={{ flexDirection:{ xs: "column", sm: "row" }}}
>
        <Box  display={"flex"} width={360}>
<img width={'100%'} src={`../../../server/uploads/${productDetails.images[0]}`} alt={"image product"}/>
        </Box>
        <Box  sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
            <Typography gutterBottom variant="h5" >
                {productDetails.category}'s fathion
            </Typography>

            <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                ${productDetails.price}
            </Typography>


    <Typography variant="body1" >
        {productDetails.description}
    </Typography>
            <Stack direction={"row"} >
                {
                    productDetails.images.map((item:any)=>{
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
                                    src={`../../../server/uploads/${item}`}
                                    alt=""
                                />
                            </Box>
                        )
                    })
                }
            </Stack>
            <Button
                sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" ,mt:4}}
                variant="contained"
            >
                <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" onClick={addToCart(productDetails.id,1)} />
                Buy now
            </Button>
        </Box>
    </Box>
}
export default ViewProduct