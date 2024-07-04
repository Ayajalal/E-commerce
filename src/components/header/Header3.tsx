import React, {useState} from "react";
import {
    Accordion,
    AccordionSummary,
    Box,
    Button,
    Container,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem, Stack,
    Typography, useMediaQuery,
    useTheme
} from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
    Close,
    ElectricBikeOutlined, ExpandMore,
    LaptopChromebookOutlined,
    MenuBookOutlined,
    SportsEsportsOutlined
} from "@mui/icons-material";
import withWidth from "@mui/material/Hidden/withWidth";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./links.tsx";
type Anchor = 'top' | 'left' | 'bottom' | 'right';
const allLinks =[
        { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
{ mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
{
    mainLink: "full screen menu",
        subLinks: ["Link 1", "Link 2", "Link 3"],
},
{ mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
{
    mainLink: "user account",
        subLinks: ["Link 1", "Link 2", "Link 3"],
},
{
    mainLink: "vendor account",
        subLinks: ["Link 1", "Link 2", "Link 3"],
},
]
const Header3=()=>{
    const [status,setStatus]=useState({
        top: false,
    })

    const anchor="top"
    const theme=useTheme()
    const [anchorEl,setAnchorEl]=useState<null | HTMLElement>(null)
    const open=Boolean(anchorEl)
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event:KeyboardEvent | MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' ||
                        (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setStatus({top: false, [anchor]: open });
            };

    const handleClick=(event:MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
return <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:3}}>

   <Box>
       <Button  sx={{ color:theme.palette.text.secondary,width:"200px"}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
           <WindowIcon ></WindowIcon>
           <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}>Categories</Typography>
           <Box sx={{flexGrow:"1"}}/>
           <KeyboardArrowRightOutlinedIcon />

       </Button>
       <Menu
           sx={{".MuiPaper-root":{width:200,backgroundColor:theme.palette.bgSearch.main}}}
           id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
           <MenuItem onClick={handleClose}>    <ListItemIcon>
               <MenuBookOutlined fontSize="small" />
           </ListItemIcon>

               <ListItemText>Books</ListItemText></MenuItem>
           <MenuItem onClick={handleClose}>   <ListItemIcon>
               <SportsEsportsOutlined fontSize="small" />
           </ListItemIcon>

               <ListItemText>Games</ListItemText></MenuItem>
           <MenuItem onClick={handleClose}> <ListItemIcon>
               <ElectricBikeOutlined fontSize="small" />
           </ListItemIcon>

               <ListItemText>Bikes</ListItemText></MenuItem>
           <MenuItem>
               <ListItemIcon>
                   <LaptopChromebookOutlined fontSize="small" />
               </ListItemIcon>

               <ListItemText>Electronics</ListItemText>
           </MenuItem>

       </Menu>
   </Box>
    {useMediaQuery("(min-width:1000px)")?  <Stack gap={4} direction={"row"} alignItems={"center"}>
            {allLinks.map((item)=>{
             return   <Links links={item} />
            })}

    </Stack> : <IconButton>
        <MenuIcon onClick={toggleDrawer(anchor,true)}/>
    </IconButton>}


    <Drawer sx={{".MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper":{height:'100%'}}} anchor={anchor} open={status[anchor]} onClose={toggleDrawer(anchor,false)}>

       <Box sx={{width:444,mx:"auto",mt:6,position:"relative",pt:5}}>
           <IconButton sx={{":hover":{rotate:"360deg",transition:"0.3s"},position:"absolute",right:0,top:0}}  onClick={toggleDrawer(anchor,false)} >
               <Close/>
           </IconButton>

           { allLinks.map((item) => {
               return (
                   <Accordion
                       key={item.mainLink}
                       elevation={0}
                       sx={{ bgcolor: "initial" }}
                   >
                       <AccordionSummary
                           expandIcon={<ExpandMore/>}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                       >
                           <Typography>{item.mainLink}</Typography>
                       </AccordionSummary>

                       <List sx={{ py: 0, my: 0 }}>
                           {item.subLinks.map((link) => {
                               return (
                                   <ListItem key={link} sx={{ py: 0, my: 0 }}>
                                       <ListItemButton>
                                           <ListItemText primary={link} />
                                       </ListItemButton>
                                   </ListItem>
                               );
                           })}
                       </List>
                   </Accordion>
               );
           })}
       </Box>

    </Drawer>
</Container>
}
export default Header3;