import React, {useState} from "react"
import imageCard from "../../assets/left-side.jpg"
 import {
    Box, Button,
    Card, CardActions,
    CardContent, CardMedia,
    Container, Dialog, IconButton, Rating,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useTheme
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ViewProduct from "./ViewProduct.tsx";
import {Close} from "@mui/icons-material";
const showTypes=[  "All Products"   ,"MEN category","Women category"]
const Main=()=>{
    const [types,setTypes] =useState(showTypes[0])
    const theme=useTheme();
    const [open,setOpen]=useState(false)
    const handleType=(event,newValue)=>{
        console.log(newValue)
        if(newValue!=null){
        setTypes(newValue)}
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
                            value={item}
                            aria-label={item}
                        >
                            {item}
                        </ToggleButton>
                    })
                }

            </ToggleButtonGroup>


        </Stack>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {data.map((item) => {
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
                            // @ts-ignore
                            image={imageCard}
                            title="green iguana"
                        />

                        <CardContent>
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.productTitle}
                                </Typography>

                                <Typography variant="subtitle1" component="p">
                                    ${item.productPrice}
                                </Typography>
                            </Stack>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with
                                over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: "space-between" }}>
                            <Button
                                onClick={() => {
                                    handleClickOpen();
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
                                value={item.productRating}
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

            <ViewProduct  />
        </Dialog>
    </Container>
}
export default Main