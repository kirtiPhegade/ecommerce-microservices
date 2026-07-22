import {
    Box,
    Container,
    Grid,
}
    from "@mui/material";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
const HeroSection = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#f0e8c5",
                    py: 6,
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        alignItems="stretch"
                        spacing={6}
                    >
                        <Grid
                            size={{
                                xs: 12,
                                md: 6,
                            }}
                        >
                            <HeroContent />
                        </Grid>

                        <Grid
                            size={{
                                xs: 12,
                                md: 6,
                            }}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }}
                        >
                            <HeroImage />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default HeroSection;
