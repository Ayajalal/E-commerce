import React  from "react";
import {Container, Typography, Box, Stack, useTheme, Divider} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import useMediaQuery from '@mui/material/useMediaQuery';

let sectionsData=[{
    icon:ElectricBoltIcon,
    title:"Fast Delivery",
    subTitle:"Start from $10"
},
    {
        icon:CreditScoreOutlinedIcon,
        title:"Payment",
        subTitle:"Secure system"

    },
    {
        icon:WorkspacePremiumOutlinedIcon,
        title:"Money Guarantee",
        subTitle:"7 Days Back"
    },
    {
        icon:AccessAlarmOutlinedIcon,
        title:"365 Days",
        subTitle:"For free return"
    }
]
const HeroIconSection=()=>{
     const matches = useMediaQuery('(min-width:600px)');
   const theme=useTheme()
    return<Container sx={{mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" ,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
        {sectionsData.map((item,index,)=>{
            const lastIndex=index===sectionsData.length-1;
            return( <Box
                          sx={{  width: 250,
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                gap: 3,

                py: 1.6,
                justifyContent:matches?"center":"left"
              }} >
                <Stack>{<item.icon/>}</Stack>
                <Stack>
                    <Typography variant="body1">{item?.title}</Typography>
                    <Typography   sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                                  variant="body1">{item?.subTitle}</Typography>
                </Stack>
                {  matches&&!lastIndex? (
                    <Divider orientation="vertical" flexItem />
                ) : null}
            </Box>)

        })}
    </Container>
}
export default HeroIconSection;