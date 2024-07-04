import React, {useContext} from "react";
import {Box, Container, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {ColorModeContext} from "../../theme.tsx";
import {DarkModeOutlined, Facebook, Instagram, LightModeOutlined, Twitter} from "@mui/icons-material";
const Header1=()=>{
   const theme=useTheme()
   const colorMode=useContext(ColorModeContext)
   return(
       <Box  sx={{bgcolor: "#2B3445",borderBottomRightRadius:"4px",borderBottomLeftRadius:"4px"
       }}>
<Container  sx={{ display:"flex" , alignItems:"center"}}>
    <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{mr:2,
            p:"3px 10px",
            bgcolor:"#D23F57",
            borderRadius:"12px",
            fontSize:"10px",
            fontWeight:"bold",
            color:"#fff"
        }}
                    variant={"body2"}
        >HOT</Typography>
        <Typography sx={{fontSize:"12px" ,
            fontWeight:300,
            color:"#fff"
        }}
                    variant={"body2"}

        >Free Express Shipping</Typography>

    </Stack>
    <Box flexGrow={1}></Box>
    <Stack direction={"row"} alignItems={"center"}>
        <div>{theme.palette.mode === "light" ?
            <IconButton onClick={() => {
                localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark");
                colorMode.toggleColorMode();
            }}
                        color="inherit">
                <LightModeOutlined sx={{color:"#fff",fontSize:"small"}}/>

            </IconButton> :
            <IconButton onClick={() => {
                localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark");
                colorMode.toggleColorMode();
            }}
                        color="inherit"><DarkModeOutlined/></IconButton>
        }</div>
        <Facebook sx={{fontSize:"16px", color:"#fff"}}/>
        <Twitter sx={{fontSize:"16px", color:"#fff",mx:1}}/>
        <Instagram sx={{fontSize:"16px" ,color:"#fff"}}/>

    </Stack>
</Container>
       </Box>


   )
}
export default Header1;