import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import logo from "../../../../assets/icons/ArtVedaLogo.png";
import homeBanner from "../../../../assets/images/homebanner.png";

const Banner = () => {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#fff",
                borderBottom: "1px solid #EFE7DB",
                overflow: "visible",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    px: 3,
                    minHeight: "320px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                {/* Left Logo */}
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: "none",
                        zIndex: 2,
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="ArtVeda"
                        sx={{
                            height: 380,
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {/* Right Bottom Banner */}
                <Box
                    component="img"
                    src={homeBanner}
                    alt="ArtVeda Banner"
                    sx={{
                        position: "absolute",
                        right: 0,
                        bottom: -40, // Half image below the border
                        width: 650,
                        height: "auto",
                        objectFit: "contain",
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                />
            </Box>
        </Box>
    );
};

export default Banner;