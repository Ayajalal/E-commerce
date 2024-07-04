import React from "react"
import {Fab, useScrollTrigger, Zoom} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";
const ScrollToTop=()=>{
   return <Zoom onClick={()=>window.scrollTo(0,0)} in={useScrollTrigger()}><Fab size={"small"} sx={{position:"fixed",bottom:33,right:33}} color={"primary"} aria-label={"scroll to top"}>
       <KeyboardArrowUp fontSize={"medium"}/>
   </Fab>
   </Zoom>
}
export default ScrollToTop