import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import leftSide1 from "../../assets/left-side.jpg"
import leftSide2 from "../../assets/left-side2.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";
import topRight from "../../assets/right-top.jpg"
import bottomRight from "../../assets/right-bottom.jpg"
import {Pagination} from "swiper/modules";
import HeroIconSection from "./iconSection.tsx";

// import IconSection from "./IconSection";

const mySlider = [
    { text: "MEN", link:leftSide1  },
    { text: "WOMEN", link:leftSide2 },
];

const Hero = () => {
    const theme = useTheme();
    return (
        <Container>
            <Box
                sx={{height:388, pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
            >
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mySlider.map((item) => {
                        return (
                            <SwiperSlide key={item.link} className="parent-slider">
                                <img src={item.link} alt=" left side" />
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("sm")]: {
                                            position: "absolute",
                                            left: "10%",
                                            textAlign: "left",
                                        },

                                        [theme.breakpoints.down("sm")]: {
                                            pt: 4,
                                            pb: 6,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#222",
                                        }}
                                        variant="h5"
                                    >
                                        LIFESTYLE COLLECTION
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#222",
                                            fontWeight: 500,
                                            my: 1,
                                        }}
                                        variant="h3"
                                    >
                                        {item.text}
                                    </Typography>

                                    <Stack
                                        sx={{
                                            justifyContent: { xs: "center", sm: "left" },
                                        }}
                                        direction={"row"}
                                        alignItems={"center"}
                                    >
                                        <Typography color={"#333"} mr={1} variant="h4">
                                            SALE UP TO
                                        </Typography>
                                        <Typography color={"#D23F57"} variant="h4">
                                            30% OFF
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        sx={{
                                            color: "#000",
                                            fontWeight: 300,
                                            my: 1,
                                        }}
                                        variant="body1"
                                    >
                                        Get Free Shipping on orders over $99.00
                                    </Typography>

                                    <Button
                                        sx={{
                                            px: 5,
                                            py: 1,
                                            mt: 2,
                                            backgroundColor: "#222",
                                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            color: "#fff",
                                            borderRadius: "1px",
                                            "&:hover": {
                                                bgcolor: "#151515",
                                                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            },
                                        }}
                                        variant="contained"
                                    >
                                        shop now
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <Box sx={{ display: { height:'100%',xs: "none", md: "block", width: "22.6%" } }}>
                    <Box sx={{ position: "relative" ,width:'100%',height:"50%"}}>
                        <img width={"100%"} height={"100%"} src={topRight} alt="" />

                        <Stack
                            sx={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                left: 31,
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    color: "#2B3445",
                                    fontSize: "18px",
                                }}
                            >
                                NEW ARRIVALS
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#2B3445",
                                    lineHeight: "16px",
                                    mt: 1,
                                }}
                            >
                                SUMMER
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#2B3445",
                                }}
                            >
                                SALE 20% OFF
                            </Typography>

                            <Link
                                sx={{
                                    color: "#2B3445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.2s",

                                    "&:hover": {
                                        color: "#D23F57",
                                    },
                                }}
                                href="#"
                                underline="none"
                            >
                                shop now
                                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                            </Link>
                        </Stack>
                    </Box>

                    <Box sx={{ position: "relative" ,height:'50%'}}>
                        <img width={"100%"} height={"100%"} src={bottomRight} alt="" />
                        <Stack
                            sx={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                left: 31,
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    color: "#2B3445",
                                    fontSize: "18px",
                                    fontWeight: 300,
                                }}
                            >
                                GAMING 4K
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#2B3445",
                                    lineHeight: "16px",
                                    mt: 1,
                                }}
                            >
                                DESKTOPS &
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#2B3445",
                                }}
                            >
                                LAPTOPS
                            </Typography>

                            <Link
                                sx={{
                                    color: "#2B3445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.2s",

                                    "&:hover": {
                                        color: "#D23F57",
                                    },
                                }}
                                href="#"
                                underline="none"
                            >
                                shop now
                                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Box>

        <HeroIconSection/>
        </Container>
    );
};

export default Hero;