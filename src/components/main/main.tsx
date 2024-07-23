import React, {useEffect, useState} from "react"
import imageCard from "../../../server/uploads/"
 import {
    Box, Button,
    Card, CardActions,
    CardContent, CardMedia,
    Container, Dialog, IconButton, Rating, Skeleton,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useTheme
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import axios from "axios"
import ViewProduct from "./ViewProduct.tsx";
import {Close} from "@mui/icons-material";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
const showTypes=[{key: "all", value: "All Products"} ,{key: "men", value: "MEN category"},{key: "women", value: "WOMEN category"},]
const Main=()=>{
    const [types,setTypes] =useState(showTypes[0].value)
    const [clickedProduct,setClickedProduct]=useState({})
    const theme=useTheme();
    const [loading,setLoading]=useState(false)
    const [allProducts,setAllProducts]=useState([])
    const [allProductsData,setAllProductsData]=useState([])

    const [open,setOpen]=useState(false)
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // Add any other necessary headers here
            },
        };

        axios.get("https://e-commerce-e1ttlwfwj-ayaismeals-projects.vercel.app/products",config
             ).then((res)=>{
            console.log(res)
            setAllProducts(res.data)
            setAllProductsData(res.data)
            setLoading(true)
            console.log(res.data[0].images[0])

        }).catch((err )=>{
            console.log(err)
        })
    },[])
    const handleType=(event,newValue)=>{
        console.log(newValue)
        debugger
        const  selectedProducts=allProductsData.filter((data:any)=>data.category===newValue);
        console.log(selectedProducts,"ell")
        console.log(event)
        if(selectedProducts?.length){setAllProducts([...selectedProducts])}
        else{
            setAllProducts([...allProductsData])
        }
    }
    const data=[{id:1,productTitle:"ee",productPrice:4,productRating:3},
        {id:2,productTitle:"ee",productPrice:4,productRating:3},
        {id:3,productTitle:"ee",productPrice:4,productRating:3}
    ]
    const handleClickOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return<Container  sx={{ py: 9 }}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}
               gap={3} >
            <Box>
                <Typography variant="h6">Selected Products</Typography>
                <Typography fontWeight={300} variant="body1">
                    All our new arrivals in a exclusive brand selection
                </Typography>
            </Box>
            <ToggleButtonGroup sx={{flexWrap:"wrap",gap:3,
                ".Mui-selected": {
                    border: "1px solid rgba(233, 69, 96, 0.5) !important",
                    color: "#e94560",
                    backgroundColor: "initial",
                },
            }} value={types} exclusive onChange={handleType} >
                {
                    showTypes.map((item)=>{
                        return <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="myButton"
                            value={item.key}
                            aria-label={item.value}
                            onChange={handleType}
                        >
                            {item.value}
                        </ToggleButton>
                    })
                }

            </ToggleButtonGroup>


        </Stack>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {!loading?<Skeleton variant="rectangular" width={210} height={118} /> :allProducts.map((item:any) => {
                return (
                    <Card
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                        key={item.id}
                        sx={{
                            maxWidth: 333,
                            mt: 6,
                            ":hover .MuiCardMedia-root ": {
                                rotate: "1deg",
                                scale: "1.1",
                                transition: "0.35s",
                            },
                        }}
                    >
                        <CardMedia
                            sx={{ height: 277 }}
                            image={`../../../server/uploads/${item.images?item.images[0]:''}`}
                            title="green iguana"
                        />


                      {/*<img src={`./src/assets/${item.image}`} alt={item.title}/>*/}

                        <CardContent>
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>

                                <Typography variant="subtitle1" component="p">
                                    ${item.price}
                                </Typography>
                            </Stack>

                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: "space-between" }}>
                            <Button
                                onClick={() => {
                                    handleClickOpen();
                                    setClickedProduct(item)
                                }}
                                sx={{ textTransform: "capitalize" }}
                                size="large"
                            >
                                <AddShoppingCartOutlinedIcon
                                    sx={{ mr: 1 }}
                                    fontSize="small"
                                />
                                add to cart
                            </Button>
                            <Rating
                                precision={0.1}
                                name="read-only"
                                value={item.rating}
                                readOnly
                            />
                        </CardActions>
                    </Card>
                );
            })}
        </Stack>
        <Dialog
            sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <IconButton
                sx={{
                    ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                    position: "absolute",
                    top: 0,
                    right: 10,
                }}
                onClick={handleClose}
            >
                <Close />
            </IconButton>

            <ViewProduct productDetails={clickedProduct}  />
        </Dialog>
    </Container>
}
export default Main