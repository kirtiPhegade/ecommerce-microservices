import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Badge,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { NAVIGATION_MENUS } from "../../../../common/constants/navigationConstants";

const NavMenu = () => {
    return (
        <>
            {/* Sticky Navigation */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: "#fff",
                    color: "#2E2A27",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: "1400px",
                        width: "100%",
                        mx: "auto",
                        minHeight: "80px",
                        px: 3,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* Left Navigation */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        {NAVIGATION_MENUS.map((item) => (
                            <Button
                                key={item.id}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: "#2E2A27",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    px: 2,
                                    borderRadius: "8px",

                                    "&:hover": {
                                        color: "#C89B3C",
                                        bgcolor: "#FFF7EA",
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Push Right Section */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Right Icons */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <IconButton
                            sx={{
                                color: "#2E2A27",

                                "&:hover": {
                                    bgcolor: "#FFF7EA",
                                    color: "#C89B3C",
                                },
                            }}
                        >
                            <Badge badgeContent={0} color="error">
                                <FavoriteBorderOutlinedIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            sx={{
                                color: "#2E2A27",

                                "&:hover": {
                                    bgcolor: "#FFF7EA",
                                    color: "#C89B3C",
                                },
                            }}
                        >
                            <Badge badgeContent={0} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>

                        <Button
                            variant="contained"
                            startIcon={<PersonOutlineOutlinedIcon />}
                            sx={{
                                ml: 2,
                                px: 3,
                                py: 1,
                                borderRadius: "30px",
                                bgcolor: "#C89B3C",
                                color: "#fff",
                                textTransform: "none",
                                fontWeight: 600,
                                boxShadow: "none",

                                "&:hover": {
                                    bgcolor: "#A97922",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavMenu;