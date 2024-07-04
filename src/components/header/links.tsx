import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

// eslint-disable-next-line react/prop-types
const Links = ({ links }) => {
    return (
        <Box
            // className="border"
            sx={{
                ":hover .show-when-hover": { display: "block" },
                ":hover": { cursor: "pointer" },

                position: "relative",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography variant="body1">{links.mainLink}</Typography>

            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box
                className=" show-when-hover"
                sx={{
                    position: "absolute",
                    top: "100%",
                    minWidth: "170px",
                    left: "50%",
                    transform: " translateX(-50%)",
                    display: "none",
                    zIndex: 2,
                }}
            >
                <Paper sx={{ mt: 2 }} className=" ">
                    <nav aria-label="secondary mailbox folders">
                        <List sx={{ py: 0, my: 0 }}>
                            {links.subLinks.map((link) => {
                                return (
                                    <ListItem key={link} sx={{ py: 0, my: 0 }}>
                                        <ListItemButton>
                                            <ListItemText primary={link} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </nav>
                </Paper>
            </Box>
        </Box>
    );
};

export default Links;