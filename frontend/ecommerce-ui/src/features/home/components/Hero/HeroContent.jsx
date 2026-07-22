import {
    Box,
    Typography,
    Button,
    Stack,
} from "@mui/material";

const HeroContent = () => {
    return (
        <>
            {/* Badge */}
            <Typography
                variant="overline"
                sx={{
                    color: "#C89B3C",
                    fontWeight: 700,
                    letterSpacing: 3,
                    fontSize: 18,
                }}
            >
                HANDMADE • LEARN • CREATE
            </Typography>

            {/* Heading */}
            <Typography
                variant="h2"
                sx={{
                    mt: 2,
                    fontWeight: 800,
                    color: "#3B2E2A",
                    lineHeight: 1.1,
                    maxWidth: 700,
                }}
            >
                Where Creativity
                <br />
                Meets Tradition
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    mt: 3,
                    fontSize: 20,
                    color: "#666",
                    maxWidth: 620,
                    lineHeight: 1.8,
                }}
            >
                Discover handcrafted décor, paintings, crochet,
                resin art, beadwork, DIY craft kits and premium
                art supplies. Learn from skilled artisans through
                creative courses and workshops designed for every
                artist and hobbyist.
            </Typography>

            {/* Buttons */}
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    mt: 5,
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        px: 5,
                        py: 1.5,
                        borderRadius: "50px",
                        bgcolor: "#C89B3C",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: 16,

                        "&:hover": {
                            bgcolor: "#A97922",
                        },
                    }}
                >
                    Explore Products
                </Button>

                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        px: 5,
                        py: 1.5,
                        borderRadius: "50px",
                        borderColor: "#C89B3C",
                        color: "#C89B3C",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: 16,

                        "&:hover": {
                            borderColor: "#A97922",
                            bgcolor: "#FFF8EC",
                        },
                    }}
                >
                    View Workshops
                </Button>
            </Stack>

            {/* Stats */}
            <Stack
                direction="row"
                spacing={6}
                sx={{
                    mt: 6,
                }}
            >
                <Box>
                    <Typography variant="h4" fontWeight={700} color="#3B2E2A">
                        350+
                    </Typography>
                    <Typography color="text.secondary">
                        Handmade Products
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight={700} color="#3B2E2A">
                        80+
                    </Typography>
                    <Typography color="text.secondary">
                        Creative Courses
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight={700} color="#3B2E2A">
                        150+
                    </Typography>
                    <Typography color="text.secondary">
                        DIY Craft Kits
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};

export default HeroContent;