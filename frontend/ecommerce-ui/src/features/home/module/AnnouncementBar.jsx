import{
    Box,
    Typography
}from "@mui/material";

const AnnouncementBar = ({announcements}) => {
    return (
        <Box
            sx={{
                bgcolor:"#D4A017",
                color:"#fff",
                overflow:"hidden",
                whiteSpace:"nowrap",
                py:0.5,
            }}
        >
            <Box
            sx={{
                display:"inline-block",
                animation:"marquee 25s linear infinite",
                "&:hover":{
                    animationPlayState:"paused",
                },
                "@keyframes marquee":{
                    "0%":{
                        transform: "translateX(100%)", 
                    },
                    "100%":{
                        transform: "translateX(-100%)", 
                    },
                },
            }}
            >
                <Typography component="span" sx={{
                    fontSize:"0.85rem",
                    fontWeight:"500",
                }}>
                    {announcements.join("   |   ")}
                </Typography>
            </Box>
        </Box>
    );
}

export default AnnouncementBar;