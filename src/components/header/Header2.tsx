import {
    Stack,
    Container,
    Typography,
    styled,
    InputBase,
    alpha,
    IconButton,
    Badge,
    BadgeProps,
    MenuItem, Menu, List, ListItemText, ListItem, useTheme
} from "@mui/material";
import {ExpandMore, Person2, ShoppingCartOutlined} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.4,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    "&:hover": {
        border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "266px",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "330px",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

const Header2=()=>{
    const options=["All Categories","Car",'Clothes','Electronics']
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex,setSelectedIndex]=useState(0)
    const open=Boolean(anchorEl);
    const theme=useTheme();
    const handleClickListItem=(event:MouseEvent<HTMLElement>)=>{
      console.log(event.target)
        setAnchorEl(event.currentTarget)
    }
    const handleMenuItemClick=(event:MouseEvent<HTMLElement>,index:number)=>{
        setSelectedIndex(index)
        setAnchorEl(null)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <Container sx={{my:3,display:"flex",justifyContent:"space-between"}}>
    <Stack  alignItems={"center"} >
        <ShoppingCartOutlined/>

        <Typography>E-commerce</Typography>
    </Stack>
        <Search
            sx={{
                display: "flex",
                borderRadius: "22px",
                justifyContent: "space-between",
            }}
        >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
            />

            <div>
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{
                        // @ts-ignore
                        bgcolor: theme.palette.bgSearch.main,
                        borderBottomRightRadius: 22,
                        borderTopRightRadius: 22,
                        p: "0",
                    }}
                >
                    <ListItem
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            // className="border"
                            sx={{
                                width: 93,
                                textAlign: "center",
                                "&:hover": { cursor: "pointer" },
                            }}
                            secondary={options[selectedIndex]}
                        />
                        <ExpandMore sx={{ fontSize: "16px" }} />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            sx={{ fontSize: "13px" }}
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </Search>
        <Stack direction={"row"}>
            <IconButton>
                <Person2/>
            </IconButton>
            <IconButton>
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartOutlined/>
                </StyledBadge>
            </IconButton>
        </Stack>
    </Container>


}
export default Header2