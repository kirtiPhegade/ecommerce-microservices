import { Box } from "@mui/material";
import HeroImageSrc from "../../../../assets/images/heromainpage.png";

const HeroImage = () => {
    return (
        <Box
            sx={
                {
                    position: "relative",
                }
            }
        >
            <Box
                component="img"
                src={HeroImageSrc}
                alt="Hero Image"
                sx={{
                    width: "100%",
                    maxWidth: 750,
                    maxHeight: 700, // Adjust until image ends with stats
                    objectFit: "contain",



                    animation: "float 5s ease-in-out infinite",
                    "@keyframes float": {
                        "0%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                        "100%": { transform: "translateY(0)" },
                    },

                }}
            />
        </Box>
    );
}
export default HeroImage;